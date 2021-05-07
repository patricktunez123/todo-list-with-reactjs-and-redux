import React from "react";
import "./_homeScreen.scss";
import catsImage from "../../files/images/two-cats.svg";

const HomeScreen = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img src={catsImage} alt="Cats!" />
        <h1>Welcome to the Tasker</h1>
        <button type="submit">Login with Gmail</button>
      </div>
    </div>
  );
};

export default HomeScreen;
