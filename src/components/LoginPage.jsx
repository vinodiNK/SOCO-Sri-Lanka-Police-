import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add real authentication here later
    navigate("/home"); // Redirect to Home page
  };

  const handleGoogleLogin = () => {
    alert("Google Login clicked!");
  };

  return (
    <div className="login-container">
      {/* Top Navigation */}
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
          src="/policeLogo.jfif"
          alt="Sri Lanka Police Logo"
          className="police-logo"
        />
        <h2>SRI LANKA POLICE</h2>
        <p className="login-text">Login to your account</p>

        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required />
          <div className="password-field">
            <input type="password" placeholder="Password" required />
            <span className="eye-icon">👁️</span>
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
