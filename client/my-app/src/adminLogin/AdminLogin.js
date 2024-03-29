import React, { useState } from "react";
import "./logStyle.css";
import axios from "axios";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

export default function Adminlogin({ setLoginUser }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLogIn, setIsLogIn] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const AdminLogin = () => {
    axios
      .post("http://localhost:9002/AdminLogin", user)
      .then((res) => {
        console.log(res);

        navigate("/FIRForm", { state: user });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar isLogIn={isLogIn} />
      <div className="log-container ">
        <form id="form" className="log-form">
          <a href="/AdminSignUP" className="log-sign">
            <h2>SIGN UP!</h2>
          </a>
          <a href="/AdminLogin" className="log-log">
            <h2>LOGIN!</h2>
          </a>
          <hr className="log-center-ball" />
          <div className="log-form-control form-control">
            <label for="username">User ID</label>
            <input
              name="email"
              value={user.email}
              onChange={handleChange}
              type="text"
              id="userid"
              placeholder="Enter userid"
            />
            <small>Error message</small>
          </div>
          <div className="log-form-control form-control">
            <label for="password">Password</label>
            <input
              name="password"
              value={user.password}
              onChange={handleChange}
              type="password"
              id="password"
              placeholder="Enter password"
            />
            <small>Error message</small>
          </div>
          {/* <button type="submit" onClick = {AdminLogin}>LOGIN</button> */}
          <div className="button" onClick={AdminLogin}>
            LOGIN
          </div>
          <a href="/ForgetPassOTP" className="log-forg-pass">
            <p>Forgot Password ?</p>
          </a>
        </form>
      </div>

      <div class="align-items-center ">
        <p class="mb-0">
          &copy; 2022 - 2023 | All Rights Reserved - Pallavi Kumari
          <a href="#" class="text-copy">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" class="text-term">
            Terms of Use
          </a>
        </p>
      </div>
    </>
  );
}
