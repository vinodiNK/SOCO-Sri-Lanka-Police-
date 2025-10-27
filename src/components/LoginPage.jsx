import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // 👇 Background Slideshow Images
  const images = [
    "police1.jpg",
    "police2.jpg",
    "police3.jpg",
    "police4.png",
    "police5.jpg"
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
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
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${require(`../assets/images/${images[currentImage]}`)})`,
      }}
    >
      

      {/* Centered Login Box */}
      <div className="login-container">
        <div className="login-box">
          <img
            src={require("../assets/images/browser-logo.png")}
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
