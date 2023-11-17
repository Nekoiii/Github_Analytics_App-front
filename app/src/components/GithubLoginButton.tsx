import React, { useState, useEffect } from "react";

export const GithubLoginButton = () => {
  const handleLogin = () => {
    // Local:
    // window.location.href = "http://localhost:3001/users/auth/github";
    // Deploy:
    window.location.href =
      "https://github-analytics-app-api-edddea7fafa4.herokuapp.com/users/auth/github";
    // window.location.href = `${process.env.REACT_APP_BACK_APP_URL}users/auth/github`;
  };
  console.log("process.env--", process.env);
  return <button onClick={handleLogin}>Login with GitHub</button>;
};
