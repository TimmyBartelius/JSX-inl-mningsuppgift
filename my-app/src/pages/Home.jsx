import React from "react";
import "../components/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardList from "../components/Firebase/cardlist-firebase";

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <h2 className="headline">Våra produkter</h2>
      </div>
      <CardList />
      <Footer />
    </main>
  );
}

//1. Header på toppen (CHECK)

//2. Produkter i ett rutnät (krav för G) 1 rad när skärmen är smal, 2 när det går.

//2B) Använd den ItemList-komponent som vi diskuterade tidigare för att hämta och visa datan. När du har lagt till data i Firestore, kommer getDocs-funktionen i ItemList-komponenten att hämta denna data och rendera listan i din React-applikation.

//2C) ItemList-komponent: Genom att importera och använda ItemList-komponenten i din Home-komponent, kommer du att hämta och visa listan med produkter från Firestore. Dynamisk rendering: ItemList hanterar datainsamlingen och rendering, så du behöver inte hårdkoda någon JSON-data direkt i HTML. Detta sätt att strukturera din kod gör det mer flexibelt och underhållbart, eftersom du kan ändra eller uppdatera datan direkt i Firestore utan att behöva ändra din React-kod.

//3. Bild på produkt, lägg-till/ta-bort till höger om bilden, kort beskrivning av varan under och pris i stor text.

//3a) Bilden finns på Figma - skall ha en border och ligga i en stor container tillsammans med resten.
//3b) Lägg-till/ta-bort, skall ligga i samma höjd som bilden - du skall kunna trycka på lägg till för att skicka en produkt till varukorgen men också ta bort för att kunna ta bort den eller om du har fler av samma i vagnen. (En counter skall finnas i mitten (överkurs, om du har tid))
//3c) Priset skall vara tydligt och stort, det skall stå ut i rutan och synas som mest.

//4. Footer på botten
