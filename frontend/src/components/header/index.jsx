import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Log from "../Log";
import Logout from "../Log/Logout";
import logo from "../../assets/jokair-blanc.svg";
import search from "../../assets/search.svg";
import user from "../../assets/user.svg";
import shopping from "../../assets/shopping-cart.svg";
import Cart from "../cart/cartWiget";
import heart from "../../assets/heart.svg";
import "../../styles/components/header.css";

const Header = ({ cartCount }) => {
  const token = localStorage.getItem("token");

  return (
    <div className="header">
      <div className="content">
        <div className="btnMenu">
          <div className="icon">
            <Link to="/" className="btnMenuEnfant"></Link>
          </div>
          <div className="btn-content">
            <div className="user">
              {token ? (
                <div>
                  <Link to="/profil">
                    <img src={user} alt="logo" />
                  </Link>
                  <div className="logout">
                    <div className="espace"></div>
                    <Logout />
                  </div>
                </div>
              ) : (
                <div>
                  <Link to="/log">
                    <img src={user} alt="logo" />
                  </Link>
                  <div className="sign">
                    <div className="espace"></div>
                    <div className="log-container">
                      <Log signin={true} signup={false} />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              <Link to="/en-cour-search" className="search">
                <img src={search} alt="logo" />
              </Link>
            </div>
          </div>
        </div>
        <div className="btnHome">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="btnCardHeart">
          <div className="card-cart">
            <Link to="/cart">
              <div className="card">
                <img src={shopping} alt="cart" />
              </div>
            </Link>
            <div className="cart-header">
              <div className="espace"></div>
              <div className="cart-container">
                <Cart />
              </div>
            </div>
          </div>
          <div className="line"></div>
          <Link to="/en-cour-like" className="heart">
            <img src={heart} alt="user" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
