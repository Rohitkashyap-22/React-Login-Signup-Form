import "./App.css";
import React, { useState } from 'react'

const App = () => {
  const [isLogin, setLogin] = useState(true)
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setLogin(false)}
          >
            SignUp
          </button>
        </div>
        {isLogin ? (
          <div className="form">
            <h2>Login Form</h2>
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Password" />
            <a href="#">Forgot Password</a>
            <button>Login</button>
            <p>
              Not a member?{" "}
              <a href="#" onClick={() => setLogin(false)}>
                Signup Now
              </a>
            </p>
          </div>
        ) : (
          <div className="form">
            <h2>Signup Form</h2>
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />
            <button>Login</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App