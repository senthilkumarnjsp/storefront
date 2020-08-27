import React from "react";

import Product from "./Product";

export default () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="products">
        <h3>In The Spotlight</h3>
        <div className="product-list">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <a
          className="side-buttons"
          style={{
            bottom: 100,
          }}
          href="#header"
        >
          <i className="medium material-icons">arrow_upward</i>
        </a>
        <button
          className="side-buttons"
          style={{
            borderRadius: "50%",
            bottom: 35,
            backgroundColor: "rgb(229, 117, 132)",
            color: "white",
          }}
        >
          <i className="medium material-icons">chat</i>
        </button>
      </div>
    </div>
  );
};
