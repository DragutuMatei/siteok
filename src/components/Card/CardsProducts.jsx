import Axios from "axios";
import React, { useEffect, useState } from "react";
import port from "../port";

function CardsProducts() {
  const [errorMesaj, setLoginError] = useState("");
  const [data, setData] = useState([]);
  const [cantitate, setCantitateSchimbata] = useState();
  const [total, setTotal] = useState();
  const [TVA, setTva] = useState();
  const [err, setErr] = useState("");

  useEffect(() => {
    if (localStorage.getItem("nume")) {
      Axios.post(port + "/productsFromCard", {
        name: localStorage.getItem("nume"),
      }).then((res) => {
        setData(res.data);
      });
    } else {
      setLoginError("Trebuie sa fii logat pentru a cumpara");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("nume")) {
      Axios.post(port + "/total", {
        nume: localStorage.getItem("nume"),
      }).then((res) => {
        setTotal(res.data["SUM(pret)"]);
        setTva(Math.floor(res.data["SUM(pret)"] * 0.16));
      });
    } else {
      setLoginError("Trebuie sa fii logat pentru a cumpara");
    }
  }, [data]);

  const schimba = (id, produs_id) => {
    if (cantitate < 1) {
      setErr("cantitatea trb sa fie peste 0!");
    } else {
      Axios.post(port+"/shimbaCantitate", {
        id: id,
        cantitate: cantitate,
        produs_id: produs_id,
      }).then((res) => {
        setData((data) => res.data);
      });
    }
  };

  const deleteItem = (id) => {
    Axios.post(port+ "/deleteItem", { id: id }).then((res) => {
      setData((data) => res.data);
    });
  };

  return (
    <div className="card">
      {errorMesaj ? (
        errorMesaj
      ) : (
        <>
          {err}
          <table className="table table-striped table-bordered table-responsive-xl">
            <thead className="thead-dark">
              <tr>
                <th scope="col">id</th>
                <th scope="col">produs</th>
                <th scope="col">cantitate</th>
                <th scope="col">pret</th>
                <th scope="col">delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => {
                return (
                  <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>
                      <a
                        style={{ color: "black" }}
                        href={"shop/" + d.produs_id}
                      >
                        {d.nume_produs}
                      </a>
                    </td>
                    <td>
                      <div className="td">
                        <input
                          type="number"
                          min="1"
                          placeholder="schimba cantitatea"
                          onChange={(e) => {
                            setCantitateSchimbata(e.target.value);
                          }}
                        />
                        {d.cantitate}
                        <button
                          onClick={() => {
                            schimba(d.id, d.produs_id);
                          }}
                        >
                          schimba
                        </button>
                      </div>
                    </td>
                    <td>{d.pret}</td>
                    <td
                      onClick={(e) => {
                        deleteItem(d.id);
                      }}
                      style={{ color: "red", cursor: "pointer" }}
                    >
                      delete
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="calcTotal">
            <h3>TVA: ${TVA}</h3>
            <h1>total: ${total + TVA}</h1>
          </div>
        </>
      )}
    </div>
  );
}

export default CardsProducts;
