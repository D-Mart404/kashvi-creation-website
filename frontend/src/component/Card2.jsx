import React, { useRef } from "react";
import "./Card2.css";
import card1 from "../assets/card_pics3/card1.jpg";
import card2 from "../assets/card_pics3/card2.jpg";
import card3 from "../assets/card_pics3/card3.jpg";
import card4 from "../assets/card_pics3/card4.jpg";
import card5 from "../assets/card_pics3/card5.jpg";
import card6 from "../assets/card_pics3/card1.jpg";
import card7 from "../assets/card_pics3/card2.jpg";
import card8 from "../assets/card_pics3/card3.jpg";

const Card = ({ imageUrl, name }) => {
  return (
    <div>
      <div className="card2" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="card-name2">{name}</div>
    </div>
  );
};

const Card2 = () => {
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    const container = containerRef.current;
    let startX = e.pageX;
    let scrollLeft = container.scrollLeft;

    const handleMouseMove = (e) => {
      container.scrollLeft = scrollLeft - (e.pageX - startX);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const cardsData = [
    { id: 1, imageUrl: card1, name: "Daily Wear" },
    { id: 2, imageUrl: card2, name: "Office Wear" },
    { id: 3, imageUrl: card3, name: "Party Wear" },
    { id: 4, imageUrl: card4, name: "Stylish Wear" },
    { id: 5, imageUrl: card5, name: "Festive Wear" },
    { id: 6, imageUrl: card6, name: "Georgette Wear" },
    { id: 7, imageUrl: card7, name: "Cool Wear" },
    { id: 8, imageUrl: card8, name: "Traditional Wear" }
  ];

  return (
    <div className="card-container2" ref={containerRef} onMouseDown={handleMouseDown}>
      {cardsData.map((card) => (
        <Card key={card.id} imageUrl={card.imageUrl} name={card.name} />
      ))}
    </div>
  );
};

export default Card2;