import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRepoName } from "../redux/repositorySlice";

import { RepoInfo } from "./RepoInfo";
import { Statistic } from "./Statistic";
import { NavBar } from "./NavBar";

interface Props {
  repoId: number;
  repoOwner: string;
  repoName: string;
}

export const HomePage = ({ repoId, repoOwner, repoName }: Props) => {
  const dispatch = useDispatch();
  const jwtToken = localStorage.getItem("jwt");
  useEffect(() => {
    // *unfinished :doesn't work now
    if (jwtToken) {
      dispatch(setRepoName(repoName));
      console.log("setRepoName--", repoName);
    }
  }, [dispatch]);

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
