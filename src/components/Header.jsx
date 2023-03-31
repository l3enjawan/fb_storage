const Header = (props) => {
  return (
    <div>
      <hr
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#BFACAC",
        }}
      />
      {props.user ? ( //Logged In
        <div>
          <div className="boxcontent">
            <center>
              <br />
              <form>
                <label style={{ width: "90%" }}>
                  Welcome:
                  <input
                    style={{
                      width: "90%",
                      height: "50px",
                      textAlign: "center",
                      paddingLeft: "10px",
                    }}
                    disabled
                    type="text"
                    name="name"
                    defaultValue={props.user.displayName}
                  />
                </label>
              </form>
              <br />
              <div>
                <span>
                  <img src={props.user.photoURL} width={100} alt="user" />
                </span>
              </div>
              <button onClick={props.logout} className="btnout">
                <b>Logout</b>
              </button>
            </center>
          </div>
        </div>
      ) : (
        //Not Logged In
        <div>
          <center>
            <div>You are not logged in.</div>
            <button onClick={props.login} className="btnin">
              <b>Login</b>
            </button>
          </center>
        </div>
      )}

      <hr
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#BFACAC",
        }}
      />
    </div>
  );
};

export default Header;
