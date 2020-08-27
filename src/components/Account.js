import React from "react";

export default () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <select defaultValue="SignIn" style={{ border: "none" }}>
        <option>SignIn</option>
        <option>SignUp</option>
      </select>
    </div>
  );
};
