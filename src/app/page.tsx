import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Menu />
      <main>{/* Your main content here */}</main>
    </div>
  );
};

export default Home;
