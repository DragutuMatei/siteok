import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navabr() {
  const [login, setLogin] = useState(false);

  let k = true;
  const downUp = () => {
    const links = document.querySelector(".links");
    const link = document.querySelectorAll(".link");
    const height = link.length * 50 + 20;
    if (k === true) {
      links.style.height = height + "px";
      k = false;
    } else {
      links.style.height = 0;
      k = true;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("nume") !== null) {
      setLogin(true);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    setLogin(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <h1>Logo</h1>
          </Link>
          <i onClick={downUp} className="fa fa-bars"></i>
        </div>
        <div className="links">
          <div className="over">
            <div className="link">
              <Link to="/">home</Link>
            </div>
            <div className="link">
              <Link to="/shop">shop</Link>
            </div>
            <div className="link">
              <Link to="/card">cos</Link>
            </div>
            <div className="link">
              <Link to="/contact">contact</Link>
            </div>
            {login === false ? (
              <>
                <div className="link">
                  <Link to="/login">login</Link>
                </div>
                <div className="link">
                  <Link to="/register">register</Link>
                </div>
              </>
            ) : (
              <>
                <div className="link">
                </div>
                <div className="link">
                  <Link onClick={logout} to="/">
                    log out
                  </Link>
                </div>
              </>
            )}
            {localStorage.getItem("nume") === "admin" && (
              <div className="link">
                <Link to="/admin">admin</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        style={{ width: "100vw", height: "80px", position: "relative" }}
      ></div>
    </>
  );
}
