import React, { useEffect, useState } from "react";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import "../Styles/login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginSuccess } from "../Reducers/loginReducer";
import { useNavigate } from "react-router-dom";
import { API } from "../API/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.error); // Assuming you have an error field in your Redux state

  useEffect(() => {
    if (error) {
      // Handle the error in the UI, e.g., by displaying an error message
      console.error("Login failed. Error:", error);
      setErrorMessage("Login failed. Error: " + error);
    }
  }, [error]);

  const handleLogin = async () => {
    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch(`${API}login`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        // console.log("data token", data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("data", JSON.stringify(data));
        dispatch(loginSuccess());
        navigate("/request/all");
      } else {
        const errorData = await response.json();
        dispatch(loginFailure(errorData.message));
        setErrorMessage("Login failed. Error: " + errorData.message);
      }
    } catch (error) {
      // console.error("Login error:", error);
      dispatch(loginFailure("An error occurred while logging in"));
      setErrorMessage("An error occurred while logging in");
    }
  };

  return (
    <div className="login-page bg-black">
      <div className="main">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="outputs">
          <div className="output">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="output">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="forgot-password">
          Forgot Password ?<span>Click here</span>
        </div>
        <div className="submitcontainer">
          <div className="submit" onClick={handleLogin}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
}
