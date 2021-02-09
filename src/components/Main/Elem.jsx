import React from "react";

function Elem(props) {
  let style;
  let style_text;
  let style_img;
  
  if (props.numar % 2) {
  
    style = {
      flexDirection: "row-reverse",
    };
  
    style_text = {
      left: "25px",
    };
    style_img = {
      right: "25px",
    };
  }
  
  return (
    <div style={style} className="elem index5">
      <div className="img" style={style_img}></div>
      <div className="text" style={style_text}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Elem;
