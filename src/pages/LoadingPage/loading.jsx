import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const LoadingPage = () => (
  <div
    className="mt-20"
    style={{
      height: "80vh",
      width: "50%",
      border: "2px solid gray",
      marginLeft: "20%",
      marginTop: "5%",
      paddingTop: "5%",
      justifyContent: "center",
    }}
  >
    <Link to="/weatherpage" style={{ textDecoration: "none" }}>
      {" "}
      <Button
        className="text-gray-500 cursor-pointer"
        style={{
          marginLeft: "45%",
          marginTop: "50%",
          border: "1px solid gray",
        }}
      >
        Loading...
      </Button>
    </Link>
  </div>
);

export default LoadingPage;
