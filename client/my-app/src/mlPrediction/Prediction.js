import React, { useState } from "react";
import "./logStyle.css";
import axios from "axios";
import Navbar from "../Navbar";

export default function Prediction() {
  const [data, setData] = useState();

  const Prediction = () => {
    axios
      .get("http://localhost:9002/Prediction")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <button className="btn">Predict</button>
      </div>
    </>
  );
}
