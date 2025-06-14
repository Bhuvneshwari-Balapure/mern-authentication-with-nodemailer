const express = require("express");
const router = express.Router();
const authCtrl = require("../controller/authCtrl");
const CheckUserAuth = require("../middleware/authMiddleware");
// Route level Middleware
router.use("/changePassword", CheckUserAuth);
router.use("/loggeduser", CheckUserAuth);
// public route (register , login)
router.post("/register", authCtrl.userRegistration);
router.post("/login", authCtrl.userLogin);
router.post("/send-password-reset-email", authCtrl.SendUserPasswordResetEmail);
router.post("/reset-password/:id/:token", authCtrl.UserPassReset);

// protected route (access dashboard and authorization)
router.post("/changePassword", authCtrl.ChangeUserPassword);
router.get("/loggeduser", authCtrl.loggedUserData);

module.exports = router;
