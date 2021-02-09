import React from "react";
import Elem from "./Elem";
import Title from "./Title";

function About() {
  return (
    <div className="about index5">
      <Title tit="About" />
      
      <Elem
        numar={3}
        img="nush.jpeg"
        title="Suntem o echipa"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias expedita omnis eum voluptas facilis tempore. expedita omnis eum voluptas facilis tempore. expedita omnis eum voluptas facilis tempore."
      />
      <Elem
        numar={4}
        img="nush.jpeg"
        title="Suntem o echipa"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias expedita omnis eum voluptas facilis tempore. expedita omnis eum voluptas facilis tempore. expedita omnis eum voluptas facilis tempore."
      />
      <Elem
        numar={5}
        img="nush.jpeg"
        title="Suntem o echipa"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias expedita omnis eum voluptas facilis tempore. expedita omnis eum voluptas facilis tempore. expedita omnis eum voluptas facilis tempore."
      />
    </div>
  );
}

export default About;
