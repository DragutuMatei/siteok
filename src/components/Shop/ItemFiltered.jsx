import React from "react";
import { Link } from "react-router-dom";

function ItemFiltered(props) {
  return (
    <>
      {props.data.map((d) => {
        const link = "/shop/" + d.id;
        return (
          <div className="item" key={d.id}>
            <img
              src={
               d.img
              }
              alt=""
            />
            <h1>{d.nume}</h1>
            <h2>{d.cantitate > 0 ? "E in stoc" : "Nu e in stoc"}</h2>
            <Link to={link} className="mainButton">
              buy
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default ItemFiltered;
