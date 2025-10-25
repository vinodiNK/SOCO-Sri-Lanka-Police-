import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 import icons
import { useNavigate } from "react-router-dom";
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
    <div className="login-container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </nav>

      {/* Login Box */}
      <div className="login-box">
        <img
          src="/police-logo.png"
          alt="Sri Lanka Police Logo"
          className="police-logo"
        />
        <h2>SRI LANKA POLICE</h2>
        <p className="login-text">Login to your account</p>

        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required />

          {/* Password Field */}
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

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_%22G%22_Logo.svg"
            alt="Google Logo"
          />
          Log in with Google
        </button>

        <p className="forgot">Forgot password?</p>
      </div>
    </div>
  );
}

export default LoginPage;
