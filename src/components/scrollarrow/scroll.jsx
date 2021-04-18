import React from "react";
import "./scroll.css";
// import ArrowKeysReact from "arrow-keys-react";

const ScrollArrow = () => (
  <div
    className="  inline-flex mt-12 invisible md:visible"
    style={{
      // marginLeft: "20%",
      fontSize: "50px",
      justifyContent: "space-between",
    }}
  >
    <div className=" arrows bold" style={{}}>
      <span className="glyphicon glyphicon-arrow-left"></span>
    </div>
    <div className="" style={{ marginLeft: "250%" }}>
      <span className="glyphicon glyphicon-arrow-right"></span>
    </div>
  </div>
);

export default ScrollArrow;
