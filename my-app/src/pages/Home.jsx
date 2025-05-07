import React from "react";
import "../components/Home.css";

function Home() {
  return (
    <main>
      <section id="popular">
        <button id="leftBtn">vänster</button>
        <h2>Populära produkter:</h2>
        <button id="rightBtn">höger</button>
      </section>
      <div id="product-display">
        <img src="src/assets/Vattenpistolen.PNG" alt="-" />
        <button id="addBtn">LÄGG TILL</button>
        <button id="remBtn">TA BORT</button>
        <div id="textSquareProduct">
          <p>TEXT</p>
          <h3>PRIS</h3>
        </div>
      </div>
    </main>
  );
}

export default Home;

//1. Header på toppen (CHECK)

//2. Populära produkter - i en slide-meny

//3. Bild på produkt, lägg-till/ta-bort till höger om bilden, kort beskrivning av varan under och pris i stor text.

//3a) Bilden finns på Figma - skall ha en border och ligga i en stor container tillsammans med resten. (Om du trycker på bilden skall du skickas till specifikation för varan. (överkurs om du har tid))
//3b) Lägg-till/ta-bort, skall ligga i samma höjd som bilden - du skall kunna trycka på lägg till för att skicka en produkt till varukorgen men också ta bort för att kunna ta bort den eller om du har fler av samma i vagnen. (En counter skall finnas i mitten (överkurs, om du har tid))
//3c) Priset skall vara tydligt och stort, det skall stå ut i rutan och synas som mest.

//4. Footer på botten
