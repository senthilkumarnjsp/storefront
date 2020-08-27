import React from "react";

export default () => {
  const categories = [
    "WHAT'S NEW",
    "BRANDS",
    "WESTERN WEAR",
    "INDIAN WEAR",
    "BAGS",
    "SHOES",
    "JEWELLERY",
    "LINGERIE",
    "ACCESSORIES",
    "KIDS",
    "LUXE",
    "SALE",
  ];
  return (
    <ul className="links desktop">
      {categories.map((category) => (
        <li className="link" key={category}>
          <p>{category}</p>
        </li>
      ))}
    </ul>
  );
};
