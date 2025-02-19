import { useState, useEffect } from "react";
import SareeCard from "./SareeCard"; // A component for each saree
import Filters from "./Filters"; // A separate Filters component

import card1 from "../assets/card_pics/card1.png";
import card2 from "../assets/card_pics/card2.png";
import card3 from "../assets/card_pics/card3.png";
import card4 from "../assets/card_pics/card4.png";
import card5 from "../assets/card_pics/card5.png";
import card6 from "../assets/card_pics/card6.png";
import card7 from "../assets/card_pics/card1.png";
import card8 from "../assets/card_pics/card2.png";
import card9 from "../assets/card_pics/card3.png";
import card10 from "../assets/card_pics/card4.png";
import card11 from "../assets/card_pics/card5.png";
import card12 from "../assets/card_pics/card6.png";

import car1 from "../assets/card_pics3/card1.jpg";
import car2 from "../assets/card_pics3/card2.jpg";
import car3 from "../assets/card_pics3/card3.jpg";
import car4 from "../assets/card_pics3/card4.jpg";
import car5 from "../assets/card_pics3/card5.jpg";
import car6 from "../assets/card_pics3/card1.jpg";
import car7 from "../assets/card_pics3/card2.jpg";
import car8 from "../assets/card_pics3/card3.jpg";
import car9 from "../assets/card_pics3/card4.jpg";
import car10 from "../assets/card_pics3/card5.jpg";

import cad1 from "../assets/card_pics2/card1.png";
import cad2 from "../assets/card_pics2/card2.png";
import cad3 from "../assets/card_pics2/card3.png";
import cad4 from "../assets/card_pics2/card4.png";
import cad5 from "../assets/card_pics2/card5.png";
import cad6 from "../assets/card_pics2/card1.png";
import cad7 from "../assets/card_pics2/card2.png";
import cad8 from "../assets/card_pics2/card3.png";
import cad9 from "../assets/card_pics2/card4.png";
import cad10 from "../assets/card_pics2/card5.png";

const BestSeller = () => {
    const [sarees, setSarees] = useState([]);
    const [filteredSarees, setFilteredSarees] = useState([]);
    const [sortOrder, setSortOrder] = useState("default");

  // Simulated saree data (replace this with an API call)
  const sareeData = [
    { id: 1, name: "Red Festive Saree", price: 2999, image: card1 },
    { id: 2, name: "Green Daily Wear Saree", price: 4499, image: car1 },
    { id: 3, name: "Golden Wedding Saree", price: 1999, image: cad1 },
    { id: 4, name: "Blue Office wear Saree", price: 3999, image: card2 },
    { id: 5, name: "Silver Silk Saree", price: 3499, image: car2 },
    { id: 6, name: "Golden Cotton Saree", price: 2999, image: cad2 },
    { id: 7, name: "Magenta Kanjeevaram Saree", price: 4999, image: card3 },
    { id: 8, name: "Blue Banarasi Saree", price: 2499, image: car3 },
    { id: 9, name: "Golden Chiffon Saree", price: 3999, image: cad3 },
    { id: 10, name: "Golden Georgette Saree", price: 1999, image: card4 },
    { id: 11, name: "Mahogany Party Wear Saree", price: 1499, image: car4 },
    { id: 12, name: "Golden Designer Saree", price: 4999, image: cad4 },
    { id: 13, name: "Orange Festive Saree", price: 2999, image: card5 },
    { id: 14, name: "Pink Daily Wear Saree", price: 4499, image: car5 },
    { id: 15, name: "Golden Bridal Saree", price: 1999, image: cad5 },
    { id: 16, name: "Green Office Wear Saree", price: 3999, image: card6 },
    { id: 17, name: "Green Party Wear Saree", price: 3499, image: car6 },
    { id: 18, name: "Golden Silk Saree", price: 2999, image: cad6 },
    { id: 19, name: "Red Cotton Saree", price: 4999, image: card7 },
    { id: 20, name: "Silver Daily Wear Saree", price: 2499, image: car7 },
    { id: 21, name: "Golden Festive Saree", price: 3999, image: cad7 },
    { id: 22, name: "Blue Banarasi Saree", price: 1999, image: card8 },
    { id: 23, name: "Blue Kanjeevaram Saree", price: 1499, image: car8 },
    { id: 24, name: "Golden Chiffon Saree", price: 4999, image: cad8 },
    { id: 25, name: "Magenta Georgette Saree", price: 2999, image: card9 },
    { id: 26, name: "Mahogany Festive Saree", price: 4499, image: car9 },
    { id: 27, name: "Golden Bridal Saree", price: 1999, image: cad9 },
    { id: 28, name: "Golden Silk Saree", price: 3999, image: card10 },
    { id: 29, name: "Pink Party Wear Saree", price: 3499, image: car10 },
    { id: 30, name: "Golden Cotton Saree", price: 3999, image: cad10 },
    { id: 31, name: "Orange Banarasi Saree", price: 2999, image: card11 },
    { id: 32, name: "Green Kanjeevaram Saree", price: 4499, image: card12 },


  ];

  useEffect(() => {
    let sortedSarees = [...sareeData];

    if (sortOrder === "price-low-high") {
      sortedSarees.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-high-low") {
      sortedSarees.sort((a, b) => b.price - a.price);
    }

    setSarees(sortedSarees);
    setFilteredSarees(sortedSarees);
  }, [sortOrder]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Best Seller</h1>

      {/* Filters & Sorting */}
      <Filters sarees={sarees} setFilteredSarees={setFilteredSarees} setSortOrder={setSortOrder} />

      {/* Saree Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSarees.length > 0 ? (
          filteredSarees.map((saree) => <SareeCard key={saree.id} saree={saree} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">No sarees found</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
