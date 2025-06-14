const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
// get token from user and verify (authenticate) to ChangeUserPassword and etc..

var CheckUserAuth = async (req, res, next) => {
  let token;

  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // get token from headers
      token = authorization.split(" ")[1];

      //   verify token
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);
      // get user from token
      req.user = await UserModel.findById(userId).select("-password");
      next();
    } catch (error) {
      console.log(error, " auth Middleware");
      res.send({ status: "failed", message: "UnAuthorized User" });
    }
  }
  if (!token) {
    res.send({ status: "failed", message: "UnAuthorized User No Token" });
  }
};

module.exports = CheckUserAuth;
