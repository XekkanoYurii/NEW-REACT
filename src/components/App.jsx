// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./Profile/Profile";
import userData from "./data/userData.json";

const App = () => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <div>
      <h1>Hello</h1>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
    </div>
  );
};

export default App;
