import React from "react";
import Header from "../components/Header/Header";
import "./home.scss";
import Desktop from "components/Desktop/Desktop";
import Taskbar from "components/Taskbar/Taskbar";

const Home: React.FC = () => {
  return (
    <div className="home-main" style={{ backgroundImage: "url(/images/background.jpg)" }}>
      <Header />
      <Desktop />
      <Taskbar />
    </div>
  );
};

export default Home;
