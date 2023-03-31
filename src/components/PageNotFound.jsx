import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div class="boxcontent">
      <center>
        <section class="page_404">
          <div class="container">
            <div class="card row">
              <div class="col-sm-12 ">
                <div class="col-sm-10 col-sm-offset-1  text-center">
                  <div class="four_zero_four_bg">
                    <h2 class="text-center " style={{ padding: "30px" }}>
                      Page Not Found
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <Link style={{ margin: 5 }} to="/">
          <button className="btnout">Home</button>
        </Link>
        <br />
      </center>
    </div>
  );
};
export default PageNotFound;
