import React from "react";
import Produse from "../components/Admin/Produse";
import Users from "../components/Admin/Users";
import Title from "../components/Main/Title";

function Admin() {
  return (
    <div className="containar" style={{ paddingBottom: "300px" }}>
      <Title tit="adauga produse:" />
      <Produse />
      <Users />
    </div>
  );
}

export default Admin;
