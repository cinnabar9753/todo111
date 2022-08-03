import React from "react";
import { Link } from "react-router-dom";

function WrongPage() {
  return (
    <div id="page-wrapper">
      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col-md-12">
          <span>404</span>
          <br></br>
          <Link to="/">点我返回首页</Link>
        </div>
      </div>
    </div>
  );
}

export default WrongPage;
