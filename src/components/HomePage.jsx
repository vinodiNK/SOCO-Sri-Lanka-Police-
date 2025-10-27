import headerImage from "../assets/images/top.jpg"; // ← update the filename
import "./HomePage.css"; // if you want custom styles

function HomePage() {
  return (
    <div className="home-page">
      <img src={headerImage} alt="Dashboard Header" className="home-header-image" />

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Welcome to the Sri Lanka Police Dashboard</h1>
        <p>You have successfully logged in.</p>
      </div>
    </div>
  );
}

export default HomePage;
