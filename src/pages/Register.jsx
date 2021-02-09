import React, { useState } from "react";
import Axios from "axios";
import port from "../components/port";

function Register() {
  const [nume, setNume] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState([]);
  const [res, setRes] = useState("");
  const [empty, setEmpty] = useState("");

  const submit = () => {
    const data = new FormData();
    data.append("name", nume);
    data.append("email", email);
    data.append("file", file);
    data.append("parola", password);

    if (nume === "" || email === "" || file === [] || password === "") {
      setEmpty("Toate campurile trebuie completate!");
    } else {
      Axios.post(port+"/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        setRes(res.data.msg);
      });
      window.location.pathname = "/login";
    }
  };

  return (
    <div className="login bigContainer">
      <div className="form">
        <h1>Register</h1>
        <input
          type="text"
          onChange={(e) => setNume(e.target.value)}
          placeholder="Nume"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parola"
          name="file"
        />
        <button type="submit" onClick={submit} className="mainButton">
          register
        </button>
        {res && <h5>{res}</h5>}
        {empty && <h5>{empty}</h5>}
      </div>
    </div>
  );
}

export default Register;
