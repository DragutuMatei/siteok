import React, { useState, useEffect } from "react";
import Axios from "axios";
import port from "../port";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get(port + "/admin/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const sterge = (id) => {
    Axios.post(port + "/admin/deleteUser", {
      id: id,
    }).then((res) => {
      setUsers(res.data);
    });
  };

  const [ok, setOk] = useState(true);
  const [txt, setTxt] = useState("Show the users!");

  const auto = { height: "auto" };
  const zero = { height: "0px" };
  const [style, setStyle] = useState({ zero });

  const show = () => {
    if (ok === true) {
      setStyle(auto);
      setTxt("Hide the users!");
      setOk(false);
    } else {
      setStyle(zero);
      setTxt("Show the users!");
      setOk(true);
    }
  };
 
  return (
    <div className="produse">
      <div className="show" onClick={show}>
        {txt}
        <i className="fas fa-chevron-down"></i>
      </div>
      <div className="over" style={style}>
        <table className="table table-striped table-bordered table-responsive-xl">
          <thead className="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">imag</th>
              <th scope="col">delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.imag}</td>
                  <td
                    className="update"
                    onClick={() => {
                      sterge(user.id);
                    }}
                    style={{ color: "red" }}
                  >
                    Sterge
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
