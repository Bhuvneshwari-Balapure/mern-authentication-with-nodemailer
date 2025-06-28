import React, { useState } from "react";
// import axios from "axios";
import LoginImg from "../../public/Images/login.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoginUserMutation } from "../Services/UserAuthApi";
import { Box, CircularProgress } from "@mui/material";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ status: false, msg: "", type: "" });
  const [userLogin, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // redux
      const response = await userLogin(formData);
      // const api = `${import.meta.env.VITE_API_URL}/user/login`;
      // const response = await axios.post(api, formData);
      console.log(response.data, "login data");
      if (response.status === "success") {
        toast.success("Successfully Logged In 🎉");
        setTimeout(() => navigate("/dashboard"), 2000);
      }
      if (response.status === "failed") {
        setError({ status: true, msg: response.data.message, type: "error" });
      }
    } catch (error) {
      const message = error.response?.data?.message || "Login failed!";
      toast.error(message);
      console.error("Login error:", message);
    }
  };

  const handleNavigate = (tab) => {
    navigate(tab === "login" ? "/login" : "/register");
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src={LoginImg} alt="Illustration" />
      </div>

      <div className="auth-right">
        <div className="tabs">
          <button
            className="tab active"
            onClick={() => handleNavigate("register")}
          >
            Registration
          </button>
          <button className="tab" onClick={() => handleNavigate("login")}>
            Login
          </button>
        </div>

        <h2>Login Your Account</h2>
        <form onSubmit={handleSubmit} className="login-form">
          {error.status && (
            <p
              className={`message ${
                error.type === "error" ? "error" : "success"
              }`}
            >
              {error.msg}
            </p>
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password *"
            required
          />
          <Box textAlign="center">
            {isLoading ? (
              <CircularProgress />
            ) : (
              <button type="submit" className="btn">
                LOGIN
              </button>
            )}
          </Box>
          <h1 style={{ color: "purple", fontSize: "16px" }}>
            <u>Forget Password ?</u>
          </h1>
        </form>
      </div>

      {/* ✅ Toast Container should be rendered somewhere once */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Login;
