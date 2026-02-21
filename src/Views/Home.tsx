import React from "react";
import Header from "../components/Header/Header";
import "./home.scss";
import Desktop from "components/Desktop/Desktop";

const Home: React.FC = () => {
  return (
    <div className="home-main">
      <Header />
      <Desktop />
    </div>
  );
};

export default Home;
