import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase_config";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

const Edit = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state;

  const [name, setName] = useState("");
  const [sect, setSect] = useState("");
  const [tel, setTel] = useState("");
  const ref = collection(db, "/stdphone");
  const targetDoc = doc(ref, id);
  useEffect(() => {
    getDoc(targetDoc).then((data) => {
      //console.log(data.data());
      let phone = data.data();
      setName(phone.name);
      setSect(phone.sect);
      setTel(phone.tel);
    });
  }, []);

  const editHandler = () => {
    const data = { name: name, sect: sect, tel: tel };
    updateDoc(targetDoc, data)
      .then(() => navigate("/stp"))
      .catch((err) => alert(err));
  };
  return (
    <div className="card">
      <h2 className="text-center text-info">Edit Student Phone</h2>
      <div
        style={{
          borderRadius: "15px",
          backgroundColor: "#fff",
          boxShadow: "5px 5px 10px #363e4f",
        }}
        className="boxcon"
      >
        <div className="p-2">
          Name:
          <br />
          <input
            style={{ width: "100%", height: "40px" }}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="p-2">
          Sect:
          <br />
          <input
            style={{ width: "40px" }}
            type="radio"
            name="rdSect"
            value="ced"
            checked={sect === "ced" ? "checked" : ""}
            onChange={(e) => setSect(e.target.value)}
          />{" "}
          CED
          <br />
          <input
            style={{ width: "40px" }}
            type="radio"
            name="rdSect"
            value="tct"
            checked={sect === "tct" ? "checked" : ""}
            onChange={(e) => setSect(e.target.value)}
          />{" "}
          TCT
          <br />
        </div>
        <div className="p-2">
          Tel:{" "}
          <input
            style={{ width: "100%", height: "40px" }}
            type="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>{" "}
        <button
          className="btn btn-sm "
          style={{
            width: "100%",
            marginTop: "10px",
            borderRadius: "15px",
            backgroundColor: "#FEE677",
            boxShadow: "5px 10px 20px #363e4f",
            color: "#000",
          }}
          onClick={editHandler}
        >
          Edit
        </button>
        <button
          className="btn btn-sm "
          style={{
            width: "100%",
            marginTop: "10px",
            borderRadius: "15px",
            backgroundColor: "#8b0611",
            boxShadow: "5px 10px 20px #363e4f",
            color: "#fff",
          }}
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default Edit;
