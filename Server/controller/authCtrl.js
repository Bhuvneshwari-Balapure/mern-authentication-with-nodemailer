const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const transporter = require("../Config/emailConfig");
// registration
const userRegistration = async (req, res) => {
  const { name, email, password, password_confirmation, termCondition } =
    req.body;
  console.log("register : ", req.body);
  const user = await User.findOne({ email: email });
  if (user) {
    res.send({ status: "failed", message: "Email Already Registered" });
  } else {
    if (name && email && password && password_confirmation && termCondition) {
      if (password === password_confirmation) {
        try {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
          const user = new User({
            name: name,
            email: email,
            password: hashedPassword,
            termCondition: termCondition,
          });
          await user.save();
          //----------------   Generate JWT Token-----------------
          const savedUser = await User.findOne({ email: email });
          const token = jwt.sign(
            { userId: savedUser._id }, //this userId will send to authMiddleware for token verify
            process.env.JWT_SECRET,
            // "mytestsecret123",
            { expiresIn: "3657854d" }
          );
          console.log(token);
          console.log("JWT Secret : ", process.env.JWT_SECRET);

          //   ---------------------------------------------------------
          res
            .status(201)

            .send({
              status: "success",
              message: "Successfully Registered",
              //   user: user,
              token: token,
            });
        } catch (error) {
          console.log(error);
          res.send({ status: "failed", message: "Unable to Register" });
        }
      } else {
        res.send({
          status: "failed",
          message: "password and Confirm password Doesn't match",
        });
      }
    } else {
      res.send({ status: "failed", message: "All Fields are Required" });
    }
  }
};
// user login
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email: email });
      if (user && user != null) {
        const IsPassMatch = await bcrypt.compare(password, user.password); //password = req.body , existEmail.password = database password(hashed password)
        if (user.email === email && IsPassMatch) {
          //----------------   Generate JWT Token-----------------
          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "3657854d",
          });

          //   ---------------------------------------------------------
          res.status(200).json({ message: "Successfully Login", token: token });
        } else {
          res.send({ status: "failed", message: "password is Not Match" });
        }
      } else {
        res.send({ status: "failed", message: "Email is Not Registered" });
      }
    } else {
      res.send({ status: "failed", message: "All Fields are Required" });
    }
  } catch (error) {}
};
// change password
const ChangeUserPassword = async (req, res) => {
  const { password, password_confirmation } = req.body;
  if (password && password_confirmation) {
    if (password !== password_confirmation) {
      res.send({
        status: "failed",
        message: "Password and Confirm Password not Matched ",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const newhashedPassword = await bcrypt.hash(password, salt);
      await User.findByIdAndUpdate(req.user._id, {
        $set: { password: newhashedPassword },
      });
      await res.status(200).json({ message: "Successfully Changed Password" });
    }
  } else {
    res.send({ status: "failed", message: "All Fields are Required" });
  }
};
// login user data
const loggedUserData = async (req, res) => {
  res.send({ user: req.user });
};
// send password reset email (nodemailer)
const SendUserPasswordResetEmail = async (req, res) => {
  // pehle email reciv hoga frontend se jis par hume mail bhejna hai
  const { email } = req.body;
  if (email) {
    const user = await User.findOne({ email: email });
    if (user) {
      // pehle ek secret key generate karenge userId or JWT_Secrete key dono ko mila kar
      const secret = user._id + process.env.JWT_SECRET;
      // secret key generate karne ke baat token generate karenge jo 15 minute ke liye valid rahega
      const token = jwt.sign({ userId: user._id }, secret, {
        expiresIn: "15m",
      });
      // now creating a link generate new password and confirm password (front end link)
      // react ki api route = /api/user/reset/:id/:token
      const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`;
      console.log("Link : ", link);
      // nodemailer code to send email
      let info = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: "Password Reset Link",
        html: `<a href=${link}>Click Here </a> to Reset Your Password`,
      });
      res.send({
        status: "success",
        message: "Successfully Sent Email to Your email Id , Please Check",
      });
    } else {
      res.send({ status: "failed", message: "Email does not exist" });
    }
  } else {
    res.send({ status: "failed", message: "Email Fields is Required" });
  }
};
//(password reset || update) after user password reset link sent then the link part
const UserPassReset = async (req, res) => {
  const { password, password_confirmation } = req.body;
  const { id, token } = req.params;
  const user = await User.findById(id);
  const new_secret = user._id + process.env.JWT_SECRET;
  try {
    jwt.verify(token, new_secret);
    if (password && password_confirmation) {
      if (password === password_confirmation) {
        const salt = await bcrypt.genSalt(10);
        const newhashedPassword = await bcrypt.hash(password, salt);
        await User.findByIdAndUpdate(user._id, {
          $set: { password: newhashedPassword },
        });
        res.send({
          status: "success",
          message: "password Reset Successfully...",
        });
      } else {
        res.send({
          status: "failed",
          message: "password and Confirm password does not Matched",
        });
      }
    } else {
      res.send({ status: "failed", message: "all Fields are Required" });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "failed", message: "Invalid Token" });
  }
};
module.exports = {
  userRegistration,
  userLogin,
  ChangeUserPassword,
  loggedUserData,
  SendUserPasswordResetEmail,
  UserPassReset,
};
