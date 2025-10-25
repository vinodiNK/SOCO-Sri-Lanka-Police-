import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // 👇 Dynamic Slideshow Images
  const images = ["police1.jpg", "police2.jpg", "police3.jpg", "police4.png","police5.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const handleGoogleLogin = () => {
    alert("Google Login clicked!");
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-wrapper">
      {/* Left Side */}
      <div className="login-left">
        {/* Top Blue Banner */}
        <img
          src={require("../assets/images/top.jpg")}
          alt="Top Banner"
          className="blue-background"
        />

        {/* Slideshow Section */}
        <div className="slideshow-container">
          <img
            src={require(`../assets/images/${images[currentImage]}`)}
            alt="Slideshow"
            className="slideshow-image"
          />
        </div>
      </div>

      {/* Right Side Login */}
      <div className="login-right">
        <div className="login-box">
          <img
            src={require("../assets/images/policeLogo.jfif")}
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
            <img
              src={require("../assets/images/google-icon.png")}
              alt="Google Logo"
              className="google-logo"
            />
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
