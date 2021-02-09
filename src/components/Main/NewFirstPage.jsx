import React from "react";

function NewFirstPage(props) { 

  return (
    <div className="bigContainer">
      <h4>{props.titluMic}</h4>
      <h2>{props.titluMare}</h2>
      <div
        className="mainButton"
        onClick={() => {
          window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        See more
      </div>
      <div className="efect"></div>
    </div>
  );
}

export default NewFirstPage;
