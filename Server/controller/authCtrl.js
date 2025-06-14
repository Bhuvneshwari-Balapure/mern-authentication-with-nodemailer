const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// registration
const userRegistration = async (req, res) => {
  const { name, email, password, password_confirmation, termCondition } =
    req.body;
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

module.exports = {
  userRegistration,
  userLogin,
  ChangeUserPassword,
  loggedUserData,
};
