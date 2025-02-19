import React, { createContext, useContext, useState } from "react";
import card1 from "../src/assets/card_pics/card1.png";
import card2 from "../src/assets/card_pics/card2.png";
import card3 from "../src/assets/card_pics/card3.png";
import card4 from "../src/assets/card_pics/card4.png";
import card5 from "../src/assets/card_pics/card5.png";
import card6 from "../src/assets/card_pics/card6.png";
const SareeContext = createContext();


export const SareeProvider = ({ children }) => {
  const [sarees, setSarees] = useState([
    { id: 1, name: "Banarasi Saree", price: 2500, color: "Red",Text: "A saree (sari) is a traditional Indian garment worn by women, known for its elegance, versatility, and cultural significance. "  ,Imageurl:card1},
    { id: 2, name: "Kanjivaram Saree", price: 3500, color: "Gold",Text:"A saree (sari) is a traditional Indian garment worn by women, known for its elegance, versatility, and cultural significance. ",Imageurl:card2 },
    { id: 3, name: "Chiffon Saree", price: 1800, color: "Blue",Text:"A saree (sari) is a traditional Indian garment worn by women, known for its elegance, versatility, and cultural significance. ",Imageurl:card3 },
    { id: 4, name: "Chiffon Saree", price: 1800, color: "Blue",Text:"A saree (sari) is a traditional Indian garment worn by women, known for its elegance, versatility, and cultural significance. ",Imageurl:card4 },
    { id: 5, name: "Chiffon Saree", price: 1800, color: "Blue",Text:"A saree (sari) is a traditional Indian garment worn by women, known for its elegance, versatility, and cultural significance. ",Imageurl:card5 },
    { id: 6, name: "Chiffon Saree", price: 1800, color: "Blue",Text:"A saree (sari) is a traditional Indian garment worn by women, known for its elegance, versatility, and cultural significance. ",Imageurl:card6 },

  ]);

  return (
    <SareeContext.Provider value={{ sarees, setSarees }}>
      {children}
    </SareeContext.Provider>
  );
};


export const useSareeContext = () => useContext(SareeContext);