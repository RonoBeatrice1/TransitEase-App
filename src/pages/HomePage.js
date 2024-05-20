import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to TransitEase</h1>
      <nav>
        <Link to="/purchase">Purchase Ticket</Link>
        <Link to="/plan">Plan Trip</Link>
        <Link to="/analytics">Data Analytics</Link>
        <Link to="/accessibility">Accessibility</Link>
      </nav>
    </div>
  );
};

export default HomePage;
