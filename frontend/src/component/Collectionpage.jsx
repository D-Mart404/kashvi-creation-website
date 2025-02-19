import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

const CollectionPage = () => {
  const { name } = useParams(); // Get category name from URL
  const [sarees, setSarees] = useState([]);
  const [filteredSarees, setFilteredSarees] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  // Simulated saree data (replace this with an API call)
  const sareeData = [
    { id: 1, name: "Red Festive Saree", price: 2999, category: "festive-collection", image: card1 },
    { id: 2, name: "Green Daily Wear Saree", price: 4499, category: "daily-wear-collection", image: car1 },
    { id: 3, name: "Golden Wedding Saree", price: 1999, category: "wedding-collection", image: cad1 },
    { id: 4, name: "Blue Festive Saree", price: 3999, category: "festive-collection", image: card2 },
    { id: 5, name: "Silver Daily Wear Saree", price: 3499, category: "daily-wear-collection", image: car2 },
    { id: 6, name: "Golden Wedding Saree", price: 2999, category: "wedding-collection", image: cad2 },
    { id: 7, name: "Magenta Festive Saree", price: 4999, category: "festive-collection", image: card3 },
    { id: 8, name: "Blue Daily Wear Saree", price: 2499, category: "daily-wear-collection", image: car3 },
    { id: 9, name: "Golden Wedding Saree", price: 3999, category: "wedding-collection", image: cad3 },
    { id: 10, name: "Golden Festive Saree", price: 1999, category: "festive-collection", image: card4 },
    { id: 11, name: "Mahogany Daily Wear Saree", price: 1499, category: "daily-wear-collection", image: car4 },
    { id: 12, name: "Golden Wedding Saree", price: 4999, category: "wedding-collection", image: cad4 },
    { id: 13, name: "Orange Festive Saree", price: 2999, category: "festive-collection", image: card5 },
    { id: 14, name: "Pink Daily Wear Saree", price: 4499, category: "daily-wear-collection", image: car5 },
    { id: 15, name: "Golden Wedding Saree", price: 1999, category: "wedding-collection", image: cad5 },
    { id: 16, name: "Green Festive Saree", price: 3999, category: "festive-collection", image: card6 },
    { id: 17, name: "Green Daily Wear Saree", price: 3499, category: "daily-wear-collection", image: car6 },
    { id: 18, name: "Golden Wedding Saree", price: 2999, category: "wedding-collection", image: cad6 },
    { id: 19, name: "Red Festive Saree", price: 4999, category: "festive-collection", image: card7 },
    { id: 20, name: "Silver Daily Wear Saree", price: 2499, category: "daily-wear-collection", image: car7 },
    { id: 21, name: "Golden Wedding Saree", price: 3999, category: "wedding-collection", image: cad7 },
    { id: 22, name: "Blue Festive Saree", price: 1999, category: "festive-collection", image: card8 },
    { id: 23, name: "Blue Daily Wear Saree", price: 1499, category: "daily-wear-collection", image: car8 },
    { id: 24, name: "Golden Wedding Saree", price: 4999, category: "wedding-collection", image: cad8 },
    { id: 25, name: "Magenta Festive Saree", price: 2999, category: "festive-collection", image: card9 },
    { id: 26, name: "Mahogany Daily Wear Saree", price: 4499, category: "daily-wear-collection", image: car9 },
    { id: 27, name: "Golden Wedding Saree", price: 1999, category: "wedding-collection", image: cad9 },
    { id: 28, name: "Golden Festive Saree", price: 3999, category: "festive-collection", image: card10 },
    { id: 29, name: "Pink Daily Wear Saree", price: 3499, category: "daily-wear-collection", image: car10 },
    { id: 30, name: "Golden Wedding Saree", price: 3999, category: "wedding-collection", image: cad10 },
    { id: 31, name: "Orange Festive Saree", price: 2999, category: "festive-collection", image: card11 },
    { id: 32, name: "Green Festive Saree", price: 4499, category: "festive-collection", image: card12 },
    // Add more sarees here...


    { id: 33, name: "Red Office Wear Saree", price: 2999, category: "office-wear-collection", image: card1 },
    { id: 36, name: "Blue Office Wear Saree", price: 3999, category: "office-wear-collection", image: card2 },
    { id: 39, name: "Magenta Office Wear Saree", price: 4999, category: "office-wear-collection", image: card3 },
    { id: 42, name: "Golden Office Wear Saree", price: 1999, category: "office-wear-collection", image: card4 },
    { id: 45, name: "Orange Office Wear Saree", price: 2999, category: "office-wear-collection", image: card5 },
    { id: 48, name: "Green Office Wear Saree", price: 3999, category: "office-wear-collection", image: card6 },
    { id: 51, name: "Red Office Wear Saree", price: 4999, category: "office-wear-collection", image: card7 },
    { id: 54, name: "Blue Office Wear Saree", price: 1999, category: "office-wear-collection", image: card8 },
    { id: 57, name: "Magenta Office Wear Saree", price: 2999, category: "office-wear-collection", image: card9 },
    { id: 60, name: "Golden Office Wear Saree", price: 3999, category: "office-wear-collection", image: card10 },
    { id: 63, name: "Orange Office Wear Saree", price: 2999, category: "office-wear-collection", image: card11 },
    { id: 64, name: "Green Office Wear Saree", price: 4499, category: "office-wear-collection", image: card12 }


  ];

  useEffect(() => {
    // Filter sarees based on category
    let filtered = sareeData.filter((saree) => saree.category === name);
  
    if (sortOrder === "price-low-high") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-high-low") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }
  
    setSarees(filtered);
    setFilteredSarees(filtered);
  }, [name, sortOrder]); // Include sortOrder in dependencies

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6 capitalize">{name.replace("-", " ")}</h1>

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

export default CollectionPage;
