import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.scss";
import "./scss/variables.scss";
import "./scss/style.scss";
import "./scss/frequently_used.scss";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage } from "./components/HomePage";

const client = new ApolloClient({
  // Local:
  // uri: "http://localhost:3001/graphql",
  // Deploy:
  uri: "https://github-analytics-app-api-edddea7fafa4.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");
    const userName = queryParams.get("userName");

    if (token && userName) {
      localStorage.setItem("jwt", token);
      localStorage.setItem("userName", userName);
      setIsLoggedIn(true);
      setUserName(userName);
    }
  }, []);

  const repoId = 1; //* unfinished, 'repoId: 1' for test
  // const repoOwner = "Nekoiii";
  // const repoName = "Rails_Tutorial";
  const repoOwner = "canbright";
  const repoName = "api.canbright.jp";

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            {/* <Route path="/login" element={<GithubLoginButton />} /> */}
            <Route
              path="/"
              element={
                <HomePage
                  repoId={repoId}
                  repoOwner={repoOwner}
                  repoName={repoName}
                />
              }
            />
          </Routes>
        </Router>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
