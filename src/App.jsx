import React from "react";
import GitHubContribution from "./GitHubContribution";

function App() {
  return (
    <div>
      <GitHubContribution
        username="ENTER_YOUR_GITHUB_USERNAME_HERE"
        token="ENTER_YOUR_GITHUB_PERSONAL_ACCESS_TOKEN_HERE"
      />
    </div>
  );
}

export default App;
