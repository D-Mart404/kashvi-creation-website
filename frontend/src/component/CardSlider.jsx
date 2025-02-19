import React, { useRef, useState } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

import Card from './Card.jsx';
import { useSareeContext } from "../Sarrecontext"; 
const CardSlider = () => {
    const navigate = useNavigate();
  const containerRef = useRef(null);
  const { sarees } = useSareeContext();
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



   return (
    <div className="best-seller-section">
      <h2 className="best-seller-heading">★ Best Seller ★</h2>
      <div className="card-container" ref={containerRef} onMouseDown={handleMouseDown}>
        {sarees.map((saree) => (
          <Card key={saree.id} imageUrl={saree.Imageurl} text={saree.Text} id={saree.id} name={saree.name} price={saree.price}/>
        ))}
      </div>
      <div className="view-more-container">
        <button onClick={() => navigate("/best-sellers")} className="view-more-button">View More</button>
      </div>
    </div>
  );
};

export default CardSlider;