import Axios from "axios";
import React, { useEffect, useState } from "react";
import port from "../components/port";

function Item({ match }) {
  const [produs, setProdus] = useState([]);
  const [img, setImg] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [cant, setCant] = useState();
  const [pret, setPret] = useState();
  const [mesaj, setMesaj] = useState("");


  useEffect(() => {
    Axios.post(port + "/getItem", { id: match.params.id }).then(
      (res) => {
        setProdus(res.data[0]);
        setColors(res.data[0].color.trim().split(" "));
        setSizes(res.data[0].size.trim().split(" "));
        setImg(
          res.data[0].img.split(" ").filter((im) => {
            return im !== "";
          })
        );
        setPret(res.data[0].pret);
      }
    );
  }, []);

  const addToCard = () => {
    const data = new FormData();
    data.append("nume", localStorage.getItem("nume"));
    data.append("nume_produs", produs.nume.trim());
    data.append("id_produs", produs.id);
    data.append("color", color);
    data.append("size", size);
    data.append("cant", cant);
    data.append("pret", pret);

    if (!localStorage.getItem("nume")) {
      setMesaj("Trebuie sa te loghezi ca sa adaugi un prdus in cos!");
    } else if (
      color === "" ||
      size === "" ||
      (cant <= 0 && cant > produs.cantitate)
    ) {
      setMesaj("Completeaza optiunile!");
    } else {
      Axios.post(port + "/addToCard", data).then((res) => {
        setMesaj(res.data);
      });
    }
  };

  return (
    <>
      <div className="containar">
        <div className="produs">
          <div className="rest">
            <div className="up">
              <div className="first">
                <h1>{produs.nume}</h1>
                <h3>
                  {produs.cantitate > 5
                    ? "este in stoc !"
                    : produs.cantitate === 0
                    ? "nu mai este in stoc"
                    : produs.cantitate === 1
                    ? "mai este 1 produs in stoc"
                    : "mai sunt " + produs.cantitate + " produse in stoc."}
                </h3>
              </div>
              <h4>-{produs.tip}-</h4>
              <h2>${produs.pret}</h2>
            </div>
            <div className="descriere">
              <h2>descriere</h2>
              <p>{produs.descriere}</p>
            </div>
            <div className="spec">
              <div className="color">
                <select
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                >
                  <option value="any">any</option>
                  {colors.map((culoare) => {
                    return (
                      <option key={culoare} value={culoare}>
                        {culoare}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="size">
                <select
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                >
                  <option value="any">any</option>
                  {sizes.map((size) => {
                    return (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="cantitate">
                <input
                  onChange={(e) => {
                    setCant(e.target.value);
                  }}
                  type="number"
                  min={0}
                  placeholder="Cantitate"
                  max={produs.cantitate}
                />
              </div>
            </div>
            <div className="addtocard">
              <div className="mainButton" onClick={addToCard}>
                add to card
              </div>
              <div className="share">
                <i className="fas fa-share-alt"></i>
                share
              </div>
            </div>
            {mesaj && <h1>{mesaj}</h1>}
          </div>
          <div className="img">
            <div className="main">
              {img.map((img, index) => {
                if (index === 0) {
                  return (
                    <img
                      key={1}
                      src={require("../assets/produse/" + img).default}
                      alt=""
                    />
                  );
                }
              })}
            </div>
            <div className="smalls">
              {img.map((im) => {
                return (
                  <img
                    key={im}
                    src={require("../assets/produse/" + im).default}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
