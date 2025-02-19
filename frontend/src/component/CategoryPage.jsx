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

const CategoryPage = () => {
  const { name } = useParams(); // Get category name from URL
  const [sarees, setSarees] = useState([]);
  const [filteredSarees, setFilteredSarees] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  // Simulated saree data (replace this with an API call)
  const sareeData = [
    { id: 1, name: "Red Silk Saree", price: 2999, category: "silk-sarees", image: card1 },
    { id: 2, name: "Green Banarasi Saree", price: 4499, category: "banarasi-sarees", image: car1 },
    { id: 3, name: "Golden Cotton Saree", price: 1999, category: "cotton-sarees", image: cad1 },
    { id: 4, name: "Blue Silk Saree", price: 3999, category: "silk-sarees", image: card2 },
    { id: 5, name: "Silver Banarasi Saree", price: 3499, category: "banarasi-sarees", image: car2 },
    { id: 6, name: "Golden Cotton Saree", price: 2999, category: "cotton-sarees", image: cad2 },
    { id: 7, name: "Magenta Silk Saree", price: 4999, category: "silk-sarees", image: card3 },
    { id: 8, name: "Blue Banarasi Saree", price: 2499, category: "banarasi-sarees", image: car3 },
    { id: 9, name: "Golden Cotton Saree", price: 3999, category: "cotton-sarees", image: cad3 },
    { id: 10, name: "Golden Silk Saree", price: 1999, category: "silk-sarees", image: card4 },
    { id: 11, name: "Mahogany Banarasi Saree", price: 1499, category: "banarasi-sarees", image: car4 },
    { id: 12, name: "Golden Cotton Saree", price: 4999, category: "cotton-sarees", image: cad4 },
    { id: 13, name: "Orange Silk Saree", price: 2999, category: "silk-sarees", image: card5 },
    { id: 14, name: "Pink Banarasi Saree", price: 4499, category: "banarasi-sarees", image: car5 },
    { id: 15, name: "Golden Cotton Saree", price: 1999, category: "cotton-sarees", image: cad5 },
    { id: 16, name: "Green Silk Saree", price: 3999, category: "silk-sarees", image: card6 },
    { id: 17, name: "Green Banarasi Saree", price: 3499, category: "banarasi-sarees", image: car6 },
    { id: 18, name: "Golden Cotton Saree", price: 2999, category: "cotton-sarees", image: cad6 },
    { id: 19, name: "Red Silk Saree", price: 4999, category: "silk-sarees", image: card7 },
    { id: 20, name: "Silver Banarasi Saree", price: 2499, category: "banarasi-sarees", image: car7 },
    { id: 21, name: "Golden Cotton Saree", price: 3999, category: "cotton-sarees", image: cad7 },
    { id: 22, name: "Blue Silk Saree", price: 1999, category: "silk-sarees", image: card8 },
    { id: 23, name: "Blue Banarasi Saree", price: 1499, category: "banarasi-sarees", image: car8 },
    { id: 24, name: "Golden Cotton Saree", price: 4999, category: "cotton-sarees", image: cad8 },
    { id: 25, name: "Magenta Silk Saree", price: 2999, category: "silk-sarees", image: card9 },
    { id: 26, name: "Mahogany Banarasi Saree", price: 4499, category: "banarasi-sarees", image: car9 },
    { id: 27, name: "Golden Cotton Saree", price: 1999, category: "cotton-sarees", image: cad9 },
    { id: 28, name: "Golden Silk Saree", price: 3999, category: "silk-sarees", image: card10 },
    { id: 29, name: "Pink Banarasi Saree", price: 3499, category: "banarasi-sarees", image: car10 },
    { id: 30, name: "Golden Cotton Saree", price: 3999, category: "cotton-sarees", image: cad10 },
    { id: 31, name: "Orange Silk Saree", price: 2999, category: "silk-sarees", image: card11 },
    { id: 32, name: "Green Silk Saree", price: 4499, category: "silk-sarees", image: card12 },
    // Add more sarees here...


    { id: 33, name: "Red Kanjeevaram Saree", price: 2999, category: "kanjeevaram-sarees", image: card1 },
    { id: 34, name: "Green Chiffon Saree", price: 4499, category: "chiffon-sarees", image: car1 },
    { id: 35, name: "Golden Georgette Saree", price: 1999, category: "georgette-sarees", image: cad1 },
    { id: 36, name: "Blue Kanjeevaram Saree", price: 3999, category: "kanjeevaram-sarees", image: card2 },
    { id: 37, name: "Silver Chiffon Saree", price: 3499, category: "chiffon-sarees", image: car2 },
    { id: 38, name: "Golden Georgette Saree", price: 2999, category: "georgette-sarees", image: cad2 },
    { id: 39, name: "Magenta Kanjeevaram Saree", price: 4999, category: "kanjeevaram-sarees", image: card3 },
    { id: 40, name: "Blue Chiffon Saree", price: 2499, category: "chiffon-sarees", image: car3 },
    { id: 41, name: "Golden Georgette Saree", price: 3999, category: "georgette-sarees", image: cad3 },
    { id: 42, name: "Golden Kanjeevaram Saree", price: 1999, category: "kanjeevaram-sarees", image: card4 },
    { id: 43, name: "Mahogany Chiffon Saree", price: 1499, category: "chiffon-sarees", image: car4 },
    { id: 44, name: "Golden Georgette Saree", price: 4999, category: "georgette-sarees", image: cad4 },
    { id: 45, name: "Orange Kanjeevaram Saree", price: 2999, category: "kanjeevaram-sarees", image: card5 },
    { id: 46, name: "Pink Chiffon Saree", price: 4499, category: "chiffon-sarees", image: car5 },
    { id: 47, name: "Golden Georgette Saree", price: 1999, category: "georgette-sarees", image: cad5 },
    { id: 48, name: "Green Kanjeevaram Saree", price: 3999, category: "kanjeevaram-sarees", image: card6 },
    { id: 49, name: "Green Chiffon Saree", price: 3499, category: "chiffon-sarees", image: car6 },
    { id: 50, name: "Golden Georgette Saree", price: 2999, category: "georgette-sarees", image: cad6 },
    { id: 51, name: "Red Kanjeevaram Saree", price: 4999, category: "kanjeevaram-sarees", image: card7 },
    { id: 52, name: "Silver Chiffon Saree", price: 2499, category: "chiffon-sarees", image: car7 },
    { id: 53, name: "Golden Georgette Saree", price: 3999, category: "georgette-sarees", image: cad7 },
    { id: 54, name: "Blue Kanjeevaram Saree", price: 1999, category: "kanjeevaram-sarees", image: card8 },
    { id: 55, name: "Blue Chiffon Saree", price: 1499, category: "chiffon-sarees", image: car8 },
    { id: 56, name: "Golden Georgette Saree", price: 4999, category: "georgette-sarees", image: cad8 },
    { id: 57, name: "Magenta Kanjeevaram Saree", price: 2999, category: "kanjeevaram-sarees", image: card9 },
    { id: 58, name: "Mahogany Chiffon Saree", price: 4499, category: "chiffon-sarees", image: car9 },
    { id: 59, name: "Golden Georgette Saree", price: 1999, category: "georgette-sarees", image: cad9 },
    { id: 60, name: "Golden Kanjeevaram Saree", price: 3999, category: "kanjeevaram-sarees", image: card10 },
    { id: 61, name: "Pink Chiffon Saree", price: 3499, category: "chiffon-sarees", image: car10 },
    { id: 62, name: "Golden Georgette Saree", price: 3999, category: "georgette-sarees", image: cad10 },
    { id: 63, name: "Orange Kanjeevaram Saree", price: 2999, category: "kanjeevaram-sarees", image: card11 },
    { id: 64, name: "Green Kanjeevaram Saree", price: 4499, category: "kanjeevaram-sarees", image: card12 },



    // Add more sarees here...


    { id: 65, name: "Red Designer Saree", price: 2999, category: "designer-sarees", image: card1 },
    { id: 66, name: "Green Party Wear Saree", price: 4499, category: "party-wear-sarees", image: car1 },
    { id: 67, name: "Golden Bridal Saree", price: 1999, category: "bridal-sarees", image: cad1 },
    { id: 68, name: "Blue Designer Saree", price: 3999, category: "designer-sarees", image: card2 },
    { id: 69, name: "Silver Party Wear Saree", price: 3499, category: "party-wear-sarees", image: car2 },
    { id: 70, name: "Golden Bridal Saree", price: 2999, category: "bridal-sarees", image: cad2 },
    { id: 71, name: "Magenta Designer Saree", price: 4999, category: "designer-sarees", image: card3 },
    { id: 72, name: "Blue Party Wear Saree", price: 2499, category: "party-wear-sarees", image: car3 },
    { id: 73, name: "Golden Bridal Saree", price: 3999, category: "bridal-sarees", image: cad3 },
    { id: 74, name: "Golden Designer Saree", price: 1999, category: "designer-sarees", image: card4 },
    { id: 75, name: "Mahogany Party Wear Saree", price: 1499, category: "party-wear-sarees", image: car4 },
    { id: 76, name: "Golden Bridal Saree", price: 4999, category: "bridal-sarees", image: cad4 },
    { id: 77, name: "Orange Designer Saree", price: 2999, category: "designer-sarees", image: card5 },
    { id: 78, name: "Pink Party Wear Saree", price: 4499, category: "party-wear-sarees", image: car5 },
    { id: 79, name: "Golden Bridal Saree", price: 1999, category: "bridal-sarees", image: cad5 },
    { id: 80, name: "Green Designer Saree", price: 3999, category: "designer-sarees", image: card6 },
    { id: 81, name: "Green Party Wear Saree", price: 3499, category: "party-wear-sarees", image: car6 },
    { id: 82, name: "Golden Bridal Saree", price: 2999, category: "bridal-sarees", image: cad6 },
    { id: 83, name: "Red Designer Saree", price: 4999, category: "designer-sarees", image: card7 },
    { id: 84, name: "Silver Party Wear Saree", price: 2499, category: "party-wear-sarees", image: car7 },
    { id: 85, name: "Golden Bridal Saree", price: 3999, category: "bridal-sarees", image: cad7 },
    { id: 86, name: "Blue Designer Saree", price: 1999, category: "designer-sarees", image: card8 },
    { id: 87, name: "Blue Party Wear Saree", price: 1499, category: "party-wear-sarees", image: car8 },
    { id: 88, name: "Golden Bridal Saree", price: 4999, category: "bridal-sarees", image: cad8 },
    { id: 89, name: "Magenta Designer Saree", price: 2999, category: "designer-sarees", image: card9 },
    { id: 90, name: "Mahogany Party Wear Saree", price: 4499, category: "party-wear-sarees", image: car9 },
    { id: 91, name: "Golden Bridal Saree", price: 1999, category: "bridal-sarees", image: cad9 },
    { id: 92, name: "Golden Designer Saree", price: 3999, category: "designer-sarees", image: card10 },
    { id: 93, name: "Pink Party Wear Saree", price: 3499, category: "party-wear-sarees", image: car10 },
    { id: 94, name: "Golden Bridal Saree", price: 3999, category: "bridal-sarees", image: cad10 },
    { id: 95, name: "Orange Designer Saree", price: 2999, category: "designer-sarees", image: card11 },
    { id: 96, name: "Green Designer Saree", price: 4499, category: "designer-sarees", image: card12 }
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

export default CategoryPage;
