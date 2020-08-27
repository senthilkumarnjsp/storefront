import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import Search from "./Search";
import Account from "./Account";
import Cart from "./Cart";

const Header = () => {
  return (
    <div className="header">
      {/* logo */}
      <Logo />
      {/* Links */}
      <Links />
      {/* search */}
      <Search />
      {/* signup and signin dropdown menu */}
      <Account />
      {/* cart */}
      <Cart />
    </div>
  );
};

export default Header;
