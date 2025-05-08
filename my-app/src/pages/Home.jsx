import React from "react";
import "../components/Home.css";

function Home() {
  return (
    <main>
      <section>
        <h2 id="headline">Våra produkter</h2>
      </section>
      <div className="forProducts" id="productDisplay">
        <img src="src/assets/Vattenpistolen.PNG" alt="Vattenpistolen" />
        <button id="addBtn">LÄGG TILL</button>
        <button id="remBtn">TA BORT</button>
      </div>
      <div className="forProducts" id="textSquareProduct">
        <p>
          Vattenpistol TurboJet 3000 Kraftfull vattenpistol med lång räckvidd,
          perfekt för varma sommardagar.
        </p>
        <h3>129 KR</h3>
      </div>
      <div className="forProducts" id="productDisplay">
        <img src="src/assets/Vattenpistolen.PNG" alt="Vattenpistolen" />
        <button id="addBtn">LÄGG TILL</button>
        <button id="remBtn">TA BORT</button>
      </div>
      <div className="forProducts" id="textSquareProduct">
        <p>
          Vattenpistol TurboJet 3000 Kraftfull vattenpistol med lång räckvidd,
          perfekt för varma sommardagar.
        </p>
        <h3>129 KR</h3>
      </div>
    </main>
  );
}

export default Home;

//1. Header på toppen (CHECK)

//2. Produkter i ett rutnät (krav för G) 1 rad när skärmen är smal, 2 när det går.

//3. Bild på produkt, lägg-till/ta-bort till höger om bilden, kort beskrivning av varan under och pris i stor text.

//3a) Bilden finns på Figma - skall ha en border och ligga i en stor container tillsammans med resten.
//3b) Lägg-till/ta-bort, skall ligga i samma höjd som bilden - du skall kunna trycka på lägg till för att skicka en produkt till varukorgen men också ta bort för att kunna ta bort den eller om du har fler av samma i vagnen. (En counter skall finnas i mitten (överkurs, om du har tid))
//3c) Priset skall vara tydligt och stort, det skall stå ut i rutan och synas som mest.

//4. Footer på botten
