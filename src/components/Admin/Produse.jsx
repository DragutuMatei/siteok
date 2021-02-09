import Axios from "axios";
import React, { useEffect, useState } from "react";
import port from "../port";

function Produse() {
  const [produse, setProduse] = useState([]);
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState("");
  const [nume, setNume] = useState("");
  const [tip, setTip] = useState("");
  const [pret, setPret] = useState("");
  const [culoare, setCuloare] = useState("");
  const [cantitate, setCantitate] = useState();
  const [size, setSize] = useState("");
  const [descriere, setDescriere] = useState("");

  const [name, setName] = useState("");
  const [typ, setTyp] = useState();
  const [price, setPrice] = useState();
  const [color, setColor] = useState("");
  const [cant, setCant] = useState("");
  const [syze, setSyze] = useState("");
  const [img, setImg] = useState("");
  const [imgName, setImgName] = useState("");
  const [descrier, setDescrier] = useState("");
  const [empty, setEmpty] = useState("");

  const Nume = (a) => {
    let n = "";
    for (let i = 0; i < a.length; i++) {
      n += a[i].name + " ";
    }
    setImgName(n.trim());
  };

  const file = (a) => {
    let n = [];
    for (let i = 0; i < a.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(a[i]);
      reader.onload = () => {
        n.push(reader.result);
      };
    }
    setImg(n);
  };
  const submit = () => {
    const data = new FormData();
    data.append("nume", name);
    data.append("tip", typ);
    data.append("cantitate", cant);
    data.append("size", syze);
    data.append("length", img);
    data.append("price", price);
    data.append("color", color);
    for (let i = 0; i < img.length; i++) {
      data.append("file", img[i]);
    }
    data.append("imgName", imgName);
    data.append("descriere", descrier);
    if (
      name === "" ||
      typ === "" ||
      cant === "" ||
      img === [] ||
      price === "" ||
      color === "" ||
      imgName === "" ||
      descrier === ""
    ) {
      setEmpty("Toate campurile trebuie completate!");
    } else {
      Axios.post(port + "/admin/add", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        setProduse(res.data);
      });
    }
  };

  //2

  useEffect(() => {
    Axios.get(port + "/produse").then((res) =>
      setProduse(res.data)
    );
  }, []);

  const updateItem = (name, id) => {
    setUpdate(true);
    setId(id);
  };

  const leave = () => {
    setUpdate(false);
  };

  const up = () => {
    const data = new FormData();
    data.append("id", id);
    data.append("nume", nume);
    data.append("tip", tip);
    data.append("cantitate", cantitate);
    data.append("pret", pret);
    data.append("culoare", culoare);
    data.append("size", size);
    data.append("descriere", descriere);

    Axios.post(port+"/admin/updateProduse", data).then(
      (res) => {
        setProduse(res.data);
      }
    );
  };

  const sterge = (id) => {
    Axios.post(port + "/admin/delete", {
      id: id,
    }).then((res) => {
      setProduse(res.data);
    });
  };

  const [ok, setOk] = useState(true);
  const [txt, setTxt] = useState("Show the products!");

  const auto = { height: "auto" };
  const zero = { height: "0px" };
  const [style, setStyle] = useState({ zero });

  const show = () => {
    if (ok === true) {
      setStyle(auto);
      setTxt("Hide the protects!");
      setOk(false);
    } else {
      setStyle(zero);
      setTxt("Show the products!");
      setOk(true);
    }
  };

  return (
    <>
      <div className="addProduse">
        <div className="col">
          <input
            type="text"
            placeholder="nume"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="tip"
            onChange={(e) => {
              setTyp(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <input
            type="number"
            placeholder="pret"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="color"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <input
            type="number"
            placeholder="cantitate"
            onChange={(e) => {
              setCant(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="size"
            onChange={(e) => {
              setSyze(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <textarea
            placeholder="descriere"
            onChange={(e) => {
              setDescrier(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="col">
          <input
            type="file"
            multiple
            onChange={(e) => {
              file(e.target.files);
              Nume(e.target.files);
            }}
            name="img"
          />
          <button type="submit" onClick={submit} className="button">
            submit
          </button>
        </div>
        {empty}
      </div>
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
                <th scope="col">nume</th>
                <th scope="col">tip</th>
                <th scope="col">pret</th>
                <th scope="col">culoare</th>
                <th scope="col">cantitate</th>
                <th scope="col">size</th>
                <th scope="col">descriere</th>
                <th scope="col">update</th>
                <th scope="col">sterge</th>
              </tr>
            </thead>
            <tbody>
              {update && (
                <tr>
                  <td>{id}</td>
                  <td>
                    <input
                      type="text"
                      placeholder="name"
                      onChange={(e) => {
                        setNume(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="tip"
                      onChange={(e) => {
                        setTip(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      placeholder="tip"
                      onChange={(e) => {
                        setPret(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="tip"
                      onChange={(e) => {
                        setCuloare(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      placeholder="cantitate"
                      onChange={(e) => {
                        setCantitate(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="size"
                      onChange={(e) => {
                        setSize(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="descriere"
                      onChange={(e) => {
                        setDescriere(e.target.value);
                      }}
                    />
                  </td>
                  <td className="update" onClick={up}>
                    update
                  </td>
                  <td onClick={leave} className="update">
                    leave
                  </td>
                </tr>
              )}

              {produse.map((produs) => {
                return (
                  <tr key={produs.id}>
                    <td>{produs.id}</td>
                    <td>{produs.nume}</td>
                    <td>{produs.tip}</td>
                    <td>{produs.pret}</td>
                    <td>{produs.color}</td>
                    <td>{produs.cantitate}</td>
                    <td>{produs.size}</td>
                    <td>{produs.descriere}</td>
                    <td
                      onClick={() => {
                        updateItem(produs.nume, produs.id);
                      }}
                      className="update"
                      style={{ color: "green" }}
                    >
                      Update
                    </td>
                    <td
                      className="update"
                      onClick={() => {
                        sterge(produs.id);
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
    </>
  );
}

export default Produse;
