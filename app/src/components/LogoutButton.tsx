import React, { useState, useEffect } from "react";

export const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userName");

    // Local:
    window.location.href = "http://localhost:3000/";
    // Deploy:
    // window.location.href =
    //   "https://github-analytics-app-front-abb2e289cc93.herokuapp.com";
  };
  return <button onClick={handleLogout}>Log out</button>;
};
