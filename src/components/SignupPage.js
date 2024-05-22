import React, { useState } from "react";
import "../styles/SignupPage.css";
import { Helmet } from "react-helmet-async";

const SignupPage = () => {
  const [isSignupActive, setIsSignupActive] = useState(false);

  const toggleForm = () => {
    setIsSignupActive(!isSignupActive);
  };

  return (
    <section className="form">
      <Helmet>
        <title>Account</title>
      </Helmet>
      <div className={`container ${isSignupActive ? "active" : ""}`}>
        <div className="user signinBx">
          <div className="imgBx">
            <img
              src="https://st4.depositphotos.com/20152108/22203/v/450/depositphotos_222031158-stock-illustration-transportation-coming-out-phone-screen.jpg"
              alt="Sign In"
            />
          </div>
          <div className="formBx">
            <form action="/login" method="POST">
              <h2>Sign In</h2>
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <input type="submit" value="Login" />
              <p className="signup">
                Don't have an account?{" "}
                <button
                  className="signupInbtn"
                  type="button"
                  onClick={toggleForm}
                >
                  Sign Up
                </button>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form action="/register" method="POST">
              <h2>Create an Account</h2>
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
              />
              <input type="submit" value="Sign Up" />
              <p className="signup">
                Already have an account?{" "}
                <button
                  className="signupInbtn"
                  type="button"
                  onClick={toggleForm}
                >
                  Sign In
                </button>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img
              src="https://st4.depositphotos.com/20152108/22203/v/450/depositphotos_222031158-stock-illustration-transportation-coming-out-phone-screen.jpg"
              alt="Sign Up"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
