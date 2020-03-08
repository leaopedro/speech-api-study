import React from "react";
import MessagesContainer from "../containers/MessagesContainer.js";
import SwitcherContainer from "../containers/SwitcherContainer.js";

import "./Home.less";

const Home = () => {
  return (
    <div className="home">
      <MessagesContainer />
      <SwitcherContainer />
    </div>
  );
};

export default Home;
