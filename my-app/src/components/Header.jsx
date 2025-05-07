import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();

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
      <div id="allProductsBtns">
        <nav>
          <img
            className="picForCat"
            src="./src/assets/Sommarbild.PNG"
            alt="Sommarleksaker"
          />
          <p className="categories">Sommarleksaker</p>
        </nav>
        <nav>
          <img
            className="picForCat"
            src="./src/assets/Vinterbild.PNG"
            alt="Vinterleksaker"
          />
          <p className="categories">Vinterleksaker</p>
        </nav>
        <nav>
          <img
            className="picForCat"
            src="./src/assets/Brädspelbild.PNG"
            alt="Brädspel"
          />
          <p className="categories">Brädspel</p>
        </nav>
        <nav>
          <img
            className="picForCat"
            src="./src/assets/Batteridrivna.PNG"
            alt="Batteridrivna leksaker"
          />
          <p className="categories">Batteridrivet</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;

//1. Headern behöver logga, cart, Produkt-knapp samt blå bakgrund (CHECK)
//2. Logga skall visa sig tryckbar, på klick skall den leda till "hem"-skärmen, alltså startsidan
//3. Cart skall visa sig tryckbar, på klick skall den leda till "kundvagnen"
//4. Produkter-knappen skall leda till produkt-sidan och startar som standard på "alla produkter"

//GLÖM INTE ROUTING - allt annat klart
