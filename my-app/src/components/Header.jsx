import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <section id="allLogosHeader">
        <nav href="home">
          <img id="logo" src="/src/assets/Logga.png" alt="Logga"></img>
        </nav>
        <nav href="cart">
          <img id="cartLogo" src="/src/assets/Cart.png" alt="Cart" />
        </nav>
      </section>
      <button id="allProductsBtn">PRODUKTER</button>
    </header>
  );
};

export default Header;

//1. Headern behöver logga, cart, Produkt-knapp samt blå bakgrund
//2. Logga skall visa sig tryckbar, på klick skall den leda till "hem"-skärmen, alltså startsidan
//3. Cart skall visa sig tryckbar, på klick skall den leda till "kundvagnen"
//4. Produkter-knappen skall leda till produkt-sidan och startar som standard på "alla produkter"
