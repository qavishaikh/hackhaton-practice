import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our App</h1>
      <div className="links">
        <Link to="/signup" className="link">Sign Up</Link>
        <Link to="/login" className="link">Login</Link>
      </div>
    </div>
  );
}

export default Home;
