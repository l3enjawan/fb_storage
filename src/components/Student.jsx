// Benjawan Promthongnun
// ID 6502041520064

// Function Component
import { Link } from "react-router-dom";
import img1 from "../images/biw.jpg";
const Student = (props) => {
  const stdStyle = {
    backgroundColor: "#AAA",
    fontSize: "24px",
    color: "red",
  };
  return (
    <div>
      {props.user ? (
        <div className="boxcontent">
          <div className="box">
            <center>
              <h2>Student Info </h2>
              <div style={stdStyle}>Name: Benjawan Promthongnun</div>
              <div>Student ID: 6502041520064</div>
              <div>Sect: TCT 1 DEA</div>
              <img style={{ width: "25%" }} src={img1} alt="Benjawan" />
            </center>
          </div>
          <hr />
          <Link style={{ margin: 5 }} to="/">
            <center>
              <button className="btnout">Home</button>
            </center>
          </Link>
          <br />
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
    </div>
  );
};
export default Student;

// import react from "react";
// class Student extends react.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "John", tel: "089-358-2857" };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello Computer Education</h1>
//         <div>Name: {this.state.name}</div>
//         <div>Tel : {this.state.tel}</div>
//       </div>
//     );
//   }
// }
// export default Student;
