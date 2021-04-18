import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./loading.css";

const LoadingPage = () => (
  <div
    className=" loadingdiv mt-20 "
    style={{
      height: "80vh",
      width: "70%",
      border: "2px solid gray",
      marginTop: "10%",
      marginLeft: "15%",
      justifyContent: "center",
    }}
  >
    <Link to="/weatherpage" style={{ textDecoration: "none" }}>
      {" "}
      <Button
        className="loadingbutton text-gray-500 cursor-pointer"
        style={{
          marginLeft: "35%",
          marginTop: "40%",
          border: "2px solid gray",
          fontSize: "large",
        }}
      >
        Loading...
      </Button>
    </Link>
  </div>
);

export default LoadingPage;
