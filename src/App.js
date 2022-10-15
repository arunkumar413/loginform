import React, { useState } from "react";

export default function App() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");

  function handleUserName(evt) {
    setUserName(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  async function handleLogin() {
    let res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: userName, password: passWord }),
    });
  }

  return (
    <div className="container">
      <label> Username </label>
      <input onChange={handleUserName} type="text" />

      <label> Password </label>
      <input onChange={handlePassword} type="Password" />

      <button onClick={handleLogin}> Login </button>
    </div>
  );
}
