import React, { useState } from "react";

const Currency = () => {
  const [currency, setCurrency] = useState("INR");
  const [country, setCountry] = useState("India");

  const currencies = { India: "₹INR", US: "$USD", UK: "€EUR" };

  const handleCurrencyChange = (e) => {
    const selected = e.target.value;
    setCurrency(currencies[selected]);
    setCountry(selected);
    console.log(currency, currencies[selected]);
  };
  return (
    <div className="currency">
      <select
        style={{ color: "white", backgroundColor: "black", border: "none" }}
        onChange={handleCurrencyChange}
      >
        {Object.keys(currencies).map((country) => (
          <option key={country} value={country}>
            {currencies[country]}
          </option>
        ))}
      </select>
      &nbsp;
      <p className="desktop">{country}</p>
    </div>
  );
};

export default Currency;
