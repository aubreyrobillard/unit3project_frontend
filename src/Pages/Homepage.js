import React, { useState } from "react";

function Homepage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // (no actual authentication here).
    setLoggedIn(true);
  };

  const signUp = () => {
    // (no actual registration here).
    setLoggedIn(true);
  };

  return (
    <div className="homepage-container">
      <div className="login-form">
        <h2>Welcome to Taste Tally!</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
        <button onClick={signUp}>Sign Up</button>
      </div>
    </div>
  );
}

export default Homepage;
