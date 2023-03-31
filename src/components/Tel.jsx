import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase_config";
import { Link } from "react-router-dom";

const Tel = (props) => {
  const [stdPhones, setStdPhones] = useState();
  const [name, setName] = useState("");
  const [sect, setSect] = useState("");
  const [tel, setTel] = useState("");
  const stdPhoneRef = collection(db, "/stdphone");

  useEffect(() => {
    getAllPhones();
  }, []);

  const getAllPhones = () => {
    getDocs(stdPhoneRef)
      .then((phones) => {
        let allPhones = [];
        // console.log("All: ",phone.doc)
        phones.docs.map((doc) => {
          return (allPhones = [...allPhones, { id: doc.id, ...doc.data() }]);
        });
        console.log("All".allPhones);
        setStdPhones(allPhones);
      })
      .catch((err) => {
        window.alert(err);
      });
  };

  const addPhone = (event) => {
    const data = { name: name, sect: sect, tel: tel };
    addDoc(stdPhoneRef, data)
      .then((docRef) => {
        setName("");
        setSect("");
        setTel("");
        getAllPhones();
        console.log("ADD", doc.id);
      })
      .catch((err) => {
        window.alert(err);
      });
  };

  const delPhone = (id) => {
    if (!window.confirm("Do you really want to delete?")) return;
    const targetDoc = doc(stdPhoneRef, id);
    deleteDoc(targetDoc)
      .then(() => {
        getAllPhones();
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      {props.user ? (
        <div className="boxcontent">
          <div className="boxcon">
            <div style={{ marginBottom: "30px" }}>
              <h1 className="card">
                <center>Student Phone</center>
              </h1>
            </div>
            <div>
              Name: <br />
              <input
                style={{ width: "100%", height: "40px" }}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              Sect: <br />
              <input
                style={{ width: "40px" }}
                type="radio"
                name="rdSect"
                value="ced"
                checked={sect === "ced" ? "checked" : ""}
                onChange={(e) => setSect(e.target.value)}
              />
              CED
              <br />
              <input
                style={{ width: "40px" }}
                type="radio"
                name="rdSect"
                value="tct"
                checked={sect === "tct" ? "checked" : ""}
                onChange={(e) => setSect(e.target.value)}
              />
              TCT <br />
              Tel: <br />
              <input
                style={{ width: "100%", height: "40px" }}
                type="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
              <center>
                <button className="btnin" onClick={addPhone}>
                  Add Data
                </button>
              </center>
            </div>
          </div>
          {stdPhones ? (
            stdPhones.map((phone) => {
              return (
                <div
                  className="boxcon"
                  key={phone.id}
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    boxShadow: "5px 5px 10px #363e4f",
                  }}
                >
                  <div className="p-2">
                    <h4 className=" text-info">{phone.name}</h4>
                    <div>
                      <b>Section: </b> {phone.sect}
                    </div>
                    <div>
                      <b>Tel. No: </b> {phone.tel}
                    </div>
                  </div>
                  <div className="p-2">
                    <Link to="/edit" state={phone.id}>
                      <button
                        className="btn btn-sm
	"
                        style={{
                          width: "100%",
                          marginTop: "10px",
                          borderRadius: "15px",
                          backgroundColor: "#FEE677",
                          boxShadow: "5px 10px 20px #363e4f",
                          color: "#000",
                        }}
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        borderRadius: "15px",
                        backgroundColor: "#8b0611",
                        boxShadow: "5px 10px 20px #363e4f",
                        color: "#fff",
                      }}
                      className="btn btn-sm "
                      onClick={(e) => delPhone(phone.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>No data</h3>
          )}
        </div>
      ) : (
        <div className="boxcontent">
          <div className="box">
            <center>
              <h2 className="text-secondary">
                You are not logged in. <br />
                Please login first!!!
              </h2>
            </center>
          </div>
        </div>
      )}
      <hr
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#BFACAC",
        }}
      />
    </>
  );
};
export default Tel;
