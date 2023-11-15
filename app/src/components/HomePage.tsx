import React, { useState, useEffect } from "react";

import { RepoInfo } from "./RepoInfo";
import { Statistic } from "./Statistic";
import { NavBar } from "./NavBar";

interface Props {
  repoId: number;
  repoOwner: string;
  repoName: string;
}

export const HomePage = ({ repoId, repoOwner, repoName }: Props) => {
  const jwtToken = localStorage.getItem("jwt");

  return (
    <div>
      <NavBar />

      {jwtToken ? (
        <div>
          <RepoInfo repoId={repoId} repoOwner={repoOwner} repoName={repoName} />
          <Statistic
            repoId={repoId}
            repoOwner={repoOwner}
            repoName={repoName}
          />
        </div>
      ) : (
        <div>Please Log In</div>
      )}
    </div>
  );
};
