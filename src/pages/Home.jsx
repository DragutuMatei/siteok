import React from "react";
import NewFirstPage from "../components/Main/NewFirstPage";
import Skils from "../components/Main/Skils";
import About from "../components/Main/About";
import Contact from "../components/Main/Contact";

function Home() {
  return (
    <>
      <NewFirstPage
        img="adidas.png"
        titluMic="Welcome at"
        titluMare="Our site"
      />
      <Skils />
      <About />
      <Contact />
    </>
  );
}

export default Home;
