import React from "react";
import Currency from "./Currency";

const AlertHeader = ({ message = "This is the Alert Header" }) => {
  return (
    <div className="alert-header">
      <Currency />
      <p style={{ color: "white", justifyContent: "center" }}>{message}</p>
    </div>
  );
};

export default AlertHeader;
