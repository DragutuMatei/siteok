import React, { useState } from "react";
import Axios from "axios";

function Login() {
  const [name, setNume] = useState("");
  const [password, setPassword] = useState("");
  const [empty, setEmpty] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    const data = new FormData();
    data.append("name", name);
    data.append("parola", password);
    if (name === "" || password === "") {
      setEmpty("Toate campurile trebuie completate!");
    } else {
      Axios.post("http://localhost:5000/login", data).then((res) => {
        if (res.data.ok === false) {
          setError(res.data.msg);
        } else {
          localStorage.setItem("nume", res.data.resp[0].name);
          localStorage.setItem("imag", res.data.resp[0].imag);
          window.location.pathname = "/";
        }
      });
    }
  };

  return (
    <div className="bigContainer index5 blur">
      <div className="form">
        <h1>Login</h1>
        <input
          type="text"
          onChange={(e) => setNume(e.target.value)}
          placeholder="Name"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parola"
        />
        <button type="submit" onClick={submit} className="mainButton">
          Login
        </button>
        {empty && <h5>{empty}</h5>}
        {error && <h5>{error}</h5>}
      </div>
    </div>
  );
}

export default Login;
