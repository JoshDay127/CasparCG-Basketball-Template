import React, { useState, useEffect } from "react";
import webCG from "./Context/webcg";

import "../App.scss";

const Quarter = () => {
  const [quarter, setQuarter] = useState("1st");

  webCG.on('data', (data) => {
    if (data.type == "set-quarter"){
      setQuarter(data.payload.quarter);
    }
  })
  return <div className="Quarter"> {quarter} </div>;
};

export default Quarter;
