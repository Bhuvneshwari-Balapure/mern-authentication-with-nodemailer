# 🔐 MERN Authentication System – JWT, Refresh Token & Nodemailer

A full-featured authentication system built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
This project includes **user registration, login, JWT-based authentication**, **refresh token handling**, and **email verification** using **Nodemailer**, all secured with **httpOnly cookies**.

---

## 🌟 Highlights

- ✅ JWT **Access & Refresh Tokens**
- ✅ User **Registration / Login**
- ✅ **Secure Password Hashing** with `bcrypt`
- ✅ **Email Verification & Reset** using `Nodemailer`
- ✅ **MongoDB Atlas** Integration
- ✅ **Environment-based Secrets** (.env)
- ✅ Tokens stored in **httpOnly Cookies**

---

## 📁 Project Structure

Authentication/
├── client/ # React frontend (optional)
├── server/ # Node.js + Express backend
│ ├── controllers/ # Route controllers (e.g., auth logic)
│ ├── routes/ # Auth routes
│ ├── models/ # Mongoose models
│ ├── middleware/ # Authentication middleware
│ ├── emailConfig.js # Nodemailer configuration
│ └── .env # Environment variables
├── .gitignore
├── README.md # You're reading it 🙂



## 🚀 Features

- 🔐 **User Registration** with secure password hashing
- 🔑 **Login** and **JWT access token** issuance
- 🔁 **Refresh Token** generation & validation
- 🔒 **Protected Routes** via middleware
- 📧 **Email functionality** using `Nodemailer` for verification/reset
- 🍪 **Cookie-based token** storage using `httpOnly` cookies
- 🌐 **MongoDB Atlas** connected via Mongoose

---

## 🧱 Tech Stack

| Technology      | Description                         |
|----------------|-------------------------------------|
| **MongoDB**     | NoSQL database (via Atlas/local)     |
| **Express.js**  | Web framework for Node.js            |
| **React**       | (Optional) Frontend UI               |
| **Node.js**     | JavaScript runtime                   |
| **bcrypt**      | Password hashing                     |
| **JWT**         | Token-based authentication           |
| **dotenv**      | Manage environment variables         |
| **Nodemailer**  | Send verification/reset emails       |
| **cookie-parser** | HTTP-only cookie support            |

---

## 🔐 Environment Variables

Create a `.env` file inside the `server/` folder with the following keys:

```env
DB_URL=mongodb://127.0.0.1:27017/AuthenticationCode
PORT=8080
JWT_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
