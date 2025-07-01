import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the user dashboard.</p>
      <Link to="/profile">Go to Profile</Link> |{" "}
      <Link to="/settings">Go to Settings</Link>
    </div>
  );
}

export default Home;