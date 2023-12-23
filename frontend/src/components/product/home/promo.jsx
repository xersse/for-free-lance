import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tilty from "react-tilty";
import axios from "axios";
import addCart from "../../../assets/shopping-cart-add.svg";
import "../../../styles/components/product/nouveauteLike.css";

const Requette = ({ addToCart }) => {
  const [data, setData] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/promo");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (item, product) => {
    const cartItem = {
      title: item.title,
      description: item.description,
      imageUrl: item.imageUrl,
      price: item.price,
      newPrice: item.newPrice,
      produitId: item.produitId,
      userId: localStorage.getItem("userId"),
      quantity: 1,
    };
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.produitId === cartItem.produitId
    );
    if (existingCartItemIndex > -1) {
      cartItems[existingCartItemIndex].quantity += 1;
    } else {
      cartItem.quantity = 1;
      cartItems.push(cartItem);
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    addToCart(product);
    setCartCount(cartCount => cartCount + 1);
  };

  return (
    <div className="nouveaute">
      {data.slice(0, 6).map((item) => {
        const id = item._id;
        return (
          <div className="p" key={id}>
            <div className="tilt">
              <Tilty className="tilty" scale={1.05} maxGlare={0.5} reverse={true} gyroscope={false}>
                <div className="inner">
                <Link to={`/product/${id}`}>
                  <div className="text">
                    <div className="title">
                      <p>{item.title}</p>
                    </div>
                    <div className="description">
                      <p>{item.description}</p>
                    </div>
                    <div className="price">
                      <p>{item.newPrice} € <strike>{item.price} €</strike></p>
                    </div>
                    <div className="img">
                      <img src={item.imageUrl} alt={item.title} />
                    </div>
                    <div className="input-addToCart-nouveaute">
                      <Link to="/">
                        <button onClick={() => handleAddToCart(item)}>
                          <img src={addCart} alt="Ajouter au panier" />
                        </button>
                      </Link>
                    </div>
                  </div>
                  </Link>
                </div>
              </Tilty>
            </div>
          </div>
        );
      })}
    </div>
  );
  
};

export default Requette;
