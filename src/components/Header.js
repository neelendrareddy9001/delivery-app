import React from "react";
import {} from "@mui/material";
import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";

import HeaderImg from "../assets/header-img.png";
import Profile from "../assets/profile.jpg";

const Header = () => {
  return (
    <>
      <header>
        <img src={HeaderImg} alt="header-img" className="logo" />

        <div className="inputBox">
          <SearchRounded className="searchIcon" />
          <input type="text" placeholder="Search" />
        </div>

        <div className="shoppingCart">
          <ShoppingCartRounded className="cart" />
          <div className="cart_content">
            <p>2</p>
          </div>
        </div>

        <div className="profileContainer">
          <div className="imgBox">
            <img src={Profile} alt="profile-img" className="profilePic" />
          </div>

          <h2 className="userName">John Doe</h2>
        </div>

        <div className="toggleMenu">
          <BarChart className="toggleIcon" />
        </div>
      </header>
    </>
  );
};

export default Header;
