import React, { useState } from "react";
// import axios from "axios";
import RegisterImg from "../../public/Images/register.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// redux
import { useRegisterUserMutation } from "../Services/UserAuthApi";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState({ status: false, msg: "", type: "" });
  const navigate = useNavigate();
  // redux
  const [registerUser] = useRegisterUserMutation();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // redux
      const res = await registerUser(formData);
      if (res.data.status === "success") {
        toast.success("You registered Successfully...");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
      if (res.data.status === "failed") {
        setError({ status: true, msg: res.data.message, type: "error" });
      }

      // const api = `${import.meta.env.VITE_API_URL}/user/register`;
      // const res = await axios.post(api, formData);
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wront , Try Again ...");
    }
  };
  const handleNavigate = (tab) => {
    if (tab == "login") {
      navigate("/login");
    } else {
      navigate("/register");
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src={RegisterImg} alt="Illustration" />
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

        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
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
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            placeholder="Name *"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            placeholder="Email Address *"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password || ""}
            onChange={handleChange}
            placeholder="Password *"
            required
          />
          <input
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation || ""}
            onChange={handleChange}
            placeholder="Confirm Password *"
            required
          />
          <label className="checkbox">
            <input
              type="checkbox"
              name="termCondition"
              checked={formData.termCondition || false}
              onChange={handleChange}
            />
            I agree to term and condition.
          </label>
          <button type="submit" className="btn">
            JOIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
