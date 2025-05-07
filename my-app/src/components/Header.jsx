import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  const handleClickProducts = () => {
    navigate("./src/pages/allProducts");
  };
  const handleClickLogo = () => {
    navigate("./src/pages/Home");
  };
  const handleClickCart = () => {
    navigate("./src/pages/Cart");
  };

  return (
    <header>
      <section id="allLogosHeader">
        <nav href="home">
          <img
            onClick={handleClickLogo}
            id="logo"
            src="/src/assets/Logga.png"
            alt="Logga"
          ></img>
        </nav>
        <nav href="cart">
          <img
            onClick={handleClickCart}
            id="cartLogo"
            src="/src/assets/Cart.png"
            alt="Cart"
          />
        </nav>
      </section>
      <div id="allProductsBtn">
        <button id="productsBtn" onClick={handleClickProducts}>
          PRODUKTER
        </button>
      </div>
    </header>
  );
};

export default Header;

//1. Headern behöver logga, cart, Produkt-knapp samt blå bakgrund
//2. Logga skall visa sig tryckbar, på klick skall den leda till "hem"-skärmen, alltså startsidan
//3. Cart skall visa sig tryckbar, på klick skall den leda till "kundvagnen"
//4. Produkter-knappen skall leda till produkt-sidan och startar som standard på "alla produkter"
