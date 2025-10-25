import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import images from src/assets/images
import googleIcon from "../assets/images/google-icon.png";
import bgImage from "../assets/images/police-bg.jfif";
import policeLogo from "../assets/images/policeLogo.jfif";

import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home"); // redirect to home page
  };

  const handleGoogleLogin = () => {
    alert("Google Login clicked!");
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-wrapper">
      {/* Left Side Background */}
      <div
        className="login-left"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right Side Login Box */}
      <div className="login-right">
        <div className="login-box">
          <img
            src={policeLogo}
            alt="Sri Lanka Police Logo"
            className="police-logo"
          />
          <h2>Welcome to</h2>
          <h2>SRI LANKA POLICE</h2>
          <p className="login-text">Login to your account</p>

          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" required />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span className="eye-icon" onClick={togglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit" className="login-btn">
              Log In
            </button>
          </form>

          <h5>Or</h5>
          <button className="google-btn" onClick={handleGoogleLogin}>
            <img src={googleIcon} alt="Google Logo" className="google-logo" />
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
