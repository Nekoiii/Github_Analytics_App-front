import React, { useState, useEffect } from "react";

export const GithubLoginButton = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:3001/users/auth/github";
  };

  return <button onClick={handleLogin}>Login with GitHub</button>;
};
