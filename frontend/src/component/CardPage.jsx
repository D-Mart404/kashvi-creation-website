import React from "react";
import "./CardPage.css";
import card1 from "../assets/card_pics/card1.png";
import card2 from "../assets/card_pics/card2.png";
import card3 from "../assets/card_pics/card3.png";
import card4 from "../assets/card_pics/card4.png";
import card5 from "../assets/card_pics/card5.png";
import card6 from "../assets/card_pics/card6.png";

const cardsData = [
  { id: 1, imageUrl: card1, text: "Elegant Silk Saree" },
  { id: 2, imageUrl: card2, text: "Classic Cotton Saree" },
  { id: 3, imageUrl: card3, text: "Stylish Banarasi Saree" },
  { id: 4, imageUrl: card4, text: "Traditional Kanjeevaram" },
  { id: 5, imageUrl: card5, text: "Modern Chiffon Saree" },
  { id: 6, imageUrl: card6, text: "Designer Saree Collection" },
];

const CardPage = () => {
  return (
    <div className="card-page-container">
      {cardsData.map((card) => (
        <div key={card.id} className="card-page-item">
          <div className="card-page-overlay"></div>
          <img src={card.imageUrl} alt={card.text} className="card-page-image" />
          <div className="card-page-text">{card.text}</div>
        </div>
      ))}
    </div>
  );
};

export default CardPage;
