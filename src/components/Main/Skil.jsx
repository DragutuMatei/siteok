import React from "react";

function Skil({ clas, title, desc }) {
  const clasa = "fas fa-" + clas;
  return (
    <div className="skil">
      <i className={clasa}></i>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default Skil;
