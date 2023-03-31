const Home = (props) => {
  return (
    <div>
      {props.user ? (
        <div className="boxcontent">
          <div className="box">
            <div
              style={{
                border: "5px solid green",
                borderRadius: "5px",
                marginTop: "20px",
              }}
            >
              <center>
                <h2 className="my-3 bg-light">Home Page</h2>
                <div>
                  <img src={props.user.photoURL} alt="user" />
                </div>
                <h4 className="bg-light text-secondary my-2 py-2">
                  {props.user.displayName}
                </h4>
              </center>
            </div>
          </div>
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
export default Home;
