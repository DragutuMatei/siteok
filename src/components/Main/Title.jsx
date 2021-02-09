import React from "react";

function Title(props) {
  const style = {
    color: props.color,
  };

  return (
    <div className="titlu index5">
      <h1 style={style}>{props.tit}</h1>
      <div className="linie"></div>
    </div>
  );
}

export default Title;
