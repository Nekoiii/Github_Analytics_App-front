import React, { useState, useEffect } from "react";

export const GithubLoginButton = () => {
  const handleLogin = () => {
    // Local:
    // window.location.href = "http://localhost:3001/users/auth/github";
    // Deploy:
    window.location.href =
      "https://github-analytics-app-front-abb2e289cc93.herokuapp.com/users/auth/github";
  };

  return <button onClick={handleLogin}>Login with GitHub</button>;
};
