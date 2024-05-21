import React from "react";
// import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <body>
      <div>
        <header>
          <div class="logo">
            <img
              src="https://media.istockphoto.com/id/472365371/vector/transport.jpg?s=1024x1024&w=is&k=20&c=GWmP27DCQJPQvN4zr1xCLls-v7Ae9JGZtN_83ODJDAE="
              class="logo-image"
              alt="TransitEase Logo"
            />
            <h1 class="logo-text">Transit-Ease</h1>
          </div>
          <a href="/">
            <button class="sign-up-button">Account</button>
          </a>
          <a href="/">
            <button class="Help-button">Help</button>
          </a>
        </header>
        {/* <h1>Welcome to TransitEase</h1> */}
        {/* <nav>
        <Link to="/purchase">Purchase Ticket</Link>
        <Link to="/plan">Plan Trip</Link>
        <Link to="/analytics">Data Analytics</Link>
        <Link to="/accessibility">Accessibility</Link>
      </nav> */}
      </div>
    </body>
  );
};

export default HomePage;
