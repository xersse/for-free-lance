import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tilty from "react-tilty";
import axios from "axios";
import addCart from "../../../../assets/shopping-cart-add.svg";
import Header from '../../../../components/header'
import Footer from '../../../../components/footer/Footer'
import Filter from '../../../../components/product/filtre'
import '../../../../styles/pages/product/replique.css'

const Repliques = ({addToCart, products }) => {

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [data, setData] = useState([]);
    const [cartCount, setCartCount] = useState(0);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/api/replique");
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

    const handleFilterChange = (event) => {
      const { name, value } = event.target;
      let updatedList = [...products];
      if (name === "prix") {
        updatedList = updatedList.filter((product) => product.price <= value);
      } else {
        updatedList = updatedList.filter((product) => product[name] === value);
      }
      const others = updatedList.filter(
        (product) =>
          !["longues", "courtes", "poing", "autre"].includes(product.category)
      );
      setFilteredProducts([...others]);
    };
  
    const longues = filteredProducts.filter(
      (product) => product.category === "longues"
    );
    const courtes = filteredProducts.filter(
      (product) => product.category === "courtes"
    );
    const poing = filteredProducts.filter(
      (product) => product.category === "poing"
    );
    const autre = filteredProducts.filter(
      (product) => product.category === "autre"
    );
    
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="product-title">
          <h1>
            <span>|</span> Répliques
          </h1>
        </div>
        <Filter handleFilterChange={handleFilterChange} />
        {longues.length > 0 && (
          <div>
            <h3>Réplique Longues</h3>
            {longues.map((item) => {
              const id = item._id;
              return (
                <div className="p" key={id}>
                  <div classNameed="p-image">
<img src={item.imageUrl} alt={item.title} />
</div>
<div className="p-details">
<div className="p-title">{item.title}</div>
<div className="p-price">{item.price}€</div>
<div className="p-description">{item.description}</div>
<button
className="cart-button"
onClick={() => handleAddToCart(item, "replique")}
>
Ajouter au panier
</button>
</div>
</div>
);
})}
</div>
)}
{courtes.length > 0 && (
<div>
<h3>Réplique Courtes</h3>
{courtes.map((item) => {
const id = item._id;
return (
<div className="p" key={id}>
<div className="p-image">
<img src={item.imageUrl} alt={item.title} />
</div>
<div className="p-details">
<div className="p-title">{item.title}</div>
<div className="p-price">{item.price}€</div>
<div className="p-description">{item.description}</div>
<button
className="cart-button"
onClick={() => handleAddToCart(item, "replique")}
>
Ajouter au panier
</button>
</div>
</div>
);
})}
</div>
)}
{poing.length > 0 && (
<div>
<h3>Réplique de Poing</h3>
{poing.map((item) => {
const id = item._id;
return (
<div className="p" key={id}>
<div className="p-image">
<img src={item.imageUrl} alt={item.title} />
</div>
<div className="p-details">
<div className="p-title">{item.title}</div>
<div className="p-price">{item.price}€</div>
<div className="p-description">{item.description}</div>
<button
className="cart-button"
onClick={() => handleAddToCart(item, "replique")}
>
Ajouter au panier
</button>
</div>
</div>
);
})}
</div>
)}
{autre.length > 0 && (
<div>
<h3>Autres Répliques</h3>
{autre.map((item) => {
const id = item._id;
return (
<div className="p" key={id}>
<div className="p-image">
<img src={item.imageUrl} alt={item.title} />
</div>
<div className="p-details">
<div className="p-title">{item.title}</div>
<div className="p-price">{item.price}€</div>
<div className="p-description">{item.description}</div>
<button
className="cart-button"
onClick={() => handleAddToCart(item, "replique")}
>
Ajouter au panier
</button>
</div>
</div>
);
})}
</div>
)}
</div>
);
};

export default Repliques;