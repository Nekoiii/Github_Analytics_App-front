import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { GithubLoginButton } from "./GithubLoginButton";
import { LogoutButton } from "./LogoutButton";

import "../scss/components/navbar.scss";

export const NavBar = () => {
  const repoName = useSelector((state: RootState) => state.repo.repoName);
  const userName = localStorage.getItem("userName");
  const jwtToken = localStorage.getItem("jwt");

  return (
    <div className="navbar flex-wrap">
      <div>
        {repoName ? <div>{repoName}</div> : <div>Github 分析サイト</div>}
      </div>

      <div>
        {jwtToken ? (
          <div>
            {userName}
            <LogoutButton />
          </div>
        ) : (
          <GithubLoginButton />
        )}
      </div>
    </div>
  );
};
