import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Component/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Component/Dashboard";
import Setting from "./Pages/Setting";
import DashHome from "./Pages/DashHome";
import Profile from "./Pages/Profile";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="/home" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/dashboard" element={<Dashboard />}>
    //         <Route path="/profile" element={<Profile />} />
    //         <Route path="/setting" element={<Setting />} />
    //         <Route path="/dashHome" element={<DashHome />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="dashHome" element={<DashHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
