import React, { useEffect, useState } from "react";
import Axios from "axios";
import ItemFiltered from "./ItemFiltered";
import port from "../port";

function Items() {
  const [data, setData] = useState([]);
  const [tip, setTip] = useState("any");
  const [marime, setMarime] = useState("any");
  const [color, setColor] = useState("any");
  const [max, setPretMax] = useState(500);
  const [min, setPretMin] = useState(0);
  const [tipuri, setTipuri] = useState([]);
  const [marimi, setMarimi] = useState([]);
  const [culori, setCulori] = useState([]);

  useEffect(() => {
    Axios.get(port + "/produse").then((res) => {
      setData(res.data);
    });
    Axios.get(port + "/getTipuri").then((r) => {
      setTipuri(r.data);
    });
    Axios.get(port + "/getMarimi").then((r) => {
      setMarimi(r.data);
    });
    Axios.get(port + "/getCulori").then((r) => {
      // console.log(r.data)
      setCulori(r.data);
    });
  }, []);

  const filtrare = (data) => {
    return data.filter((d) => {
      return (
        d.pret >= min &&
        d.pret <= max &&
        (tip !== "any" ? d.tip === tip : d.tip !== "any") &&
        (marime !== "any"
          ? d.size.split(" ").includes(marime) && d.size
          : d.size !== "any") &&
        (color !== "any"
          ? d.color.split(" ").includes(color) && d.color
          : d.color !== "any")
      );
    });
  };

  return (
    <div className="items">
      <div className="filters">
        <div className="select">
          <h3>tip</h3>
          <select
            onChange={(e) => {
              setTip(e.target.value);
            }}
          >
            <option value="any">any</option>
            {/*  <option value="hanorac">hanorac</option>
            <option value="tricou">tricou</option>
            <option value="sapca">sapca</option>
            <option value="blugi">blugi</option> */}
            {tipuri.map((tip) => (
              <option value={tip.tip}>{tip.tip}</option>
            ))}
          </select>
        </div>
        <div
          className="select"
          onChange={(e) => {
            setMarime(e.target.value);
          }}
        >
          <h3>Marime</h3>
          <select>
            <option value="any">any</option>
            {/* <option value="XXS">XXS</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option> */}

            {marimi.map((marime) => (
              <option value={marime.size}>{marime.size}</option>
            ))}
          </select>
        </div>
        <div className="select">
          <h3>color</h3>
          <select
            onChange={(e) => {
              setColor(e.target.value);
            }}
          >
            <option value="any">any</option>
            {/* <option value="red">red</option>
            <option value="black">black</option>
            <option value="blue">blue</option>
            <option value="white">white</option> */}

            {culori.map((cul) => (
              <option value={cul.color}>{cul.color}</option>
            ))}
          </select>
        </div>
        <div className="pret">
          <h3>pret :</h3>
          <div className="intre">
            <input
              placeholder="pret minim"
              type="number"
              onChange={(e) => {
                setPretMin(e.target.value);
              }}
            />
            <input
              placeholder="pret maxim"
              type="number"
              onChange={(e) => {
                setPretMax(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="prod">
        <ItemFiltered data={filtrare(data)} />
      </div>
    </div>
  );
}

export default Items;
