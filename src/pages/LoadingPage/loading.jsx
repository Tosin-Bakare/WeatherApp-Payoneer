import React from "react";

const LoadingPage = () => (
  <div
    className=" loadingdiv"
    style={{
      height: "90vh",
      width: "70%",
      border: "2px solid black",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      margin: "0 auto",
    }}
  >
    <h1
      className="loadingText"
      style={{
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      Loading....
    </h1>
  </div>
);

export default LoadingPage;
