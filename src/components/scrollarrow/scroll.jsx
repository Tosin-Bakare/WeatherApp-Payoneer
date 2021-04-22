import React from "react";
import "./scroll.css";

const ScrollArrow = ({ onScroll, scrollPosition }) => (
  <div
    className="inline-flex"
    style={{
      fontSize: "50px",
      justifyContent: "space-between",
      margin: "2rem auto",
      width: "70%",
    }}
  >
    <div
      className={`arrow left-arrow ${scrollPosition === 0 && "invisible"}`}
      onClick={() => onScroll(-200)}
    >
      <span className="glyphicon glyphicon-arrow-left"></span>
    </div>
    <div className={`arrow right-arrow`} onClick={() => onScroll(200)}>
      <span className="glyphicon glyphicon-arrow-right"></span>
    </div>
  </div>
);

export default ScrollArrow;
