import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export default function CardList() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const querySnapshot = await getDocs(collection(db, "AllToys"));
      const itemList = querySnapshot.docs.map((doc) => doc.data());
      setCard(itemList);
    };

    fetchCards();
  }, []);

  return (
    <div>
      {card.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <h2 className="card-title">{card.title}</h2>
          <p className="card-text">{card.text}</p>
          <p className="card-price">{card.price}</p>
        </div>
      ))}
    </div>
  );
}
