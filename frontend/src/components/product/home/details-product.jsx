import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../header";
import Prefooter from "../../footer/prefooter";
import Footer from "../../footer/Footer";
import "../../../styles/components/product/details-product.css";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const routes = [
        `http://localhost:3000/api/nouveaute/${id}`,
        `http://localhost:3000/api/promo/${id}`,
        // ajouter ici d'autres URLs si nécessaire
      ];
  
      for (const route of routes) {
        try {
          const response = await fetch(route);
          const result = await response.json();
          setData(result);
          break;
        } catch (error) {
          console.error(error);
        }
      }
    };
  
    fetchData();
  }, [id]);  

  const renderContenu = (contenu) => {
    const paragraphs = contenu
      .split("-")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
    return paragraphs;
  };

  const handleAddToCart = (item) => {
    const cartItem = {
      title: item.title,
      description: item.description,
      imageUrl: item.imageUrl,
      price: item.price,
      newPrice: item.newPrice,
      produitId: item.produitId,
      userId: localStorage.getItem("userId"),
      quantity: quantity,
    };
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.produitId === cartItem.produitId
    );
    if (existingCartItemIndex > -1) {
      cartItems[existingCartItemIndex].quantity += quantity;
    } else {
      cartItems.push(cartItem);
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  return (
    <div className="Product-detail">
      <div className="header">
        <Header />
      </div>
      {data && (
        <div className="content-detail">
          <div className="head-detail">
            <div className="img-detail">
              <div className="align-img">
                <img src={data.imageUrl} alt={data.title} />
              </div>
              <p className="marque">
                <span>
                  {data.marque}
                </span>
              </p>
            </div>
            <div className="nav-head-detail">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <p>{data.price} {data.newPrice}</p>
              <div className="quantity-select">
                <button onClick={handleDecreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncreaseQuantity}>+</button>
                <button onClick={() => handleAddToCart(data)}>
                <p>Ajouter au panier</p>
              </button>
              </div>
            </div>
          </div>
          <div className="content-detail-product">
            <div className="description-detail">
              <h3>Description</h3>
              <p>{data.descriptionComplete}</p>
            </div>
            <div className="contenu-caracteristique-detail">
              <div className="contenu-detail">
                <h3>contenu</h3>
                {renderContenu(data.contenu)}
              </div>
              <div className="caracteristiques-detail">
                <h3>Caractéristiques</h3>
                {renderContenu(data.caracteristiques)}
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <Prefooter/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
};

export default Product;
