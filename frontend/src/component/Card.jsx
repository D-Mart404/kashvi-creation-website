import { useState } from "react";
import { Heart, ShoppingCart, Plus, Minus } from "lucide-react"; 

const Card = ({ imageUrl, id, name, price, text }) => {
  const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };

  const user = getUser();
  const [liked, setLiked] = useState(user ? user.wishlist.includes(id) : false);
  const [zoom, setZoom] = useState(1); 

  const heartHandle = async () => {
    if (!user) {
      alert("Login First");
    } else {
      setLiked(!liked);
      if (!liked) {
        user.wishlist.push(id);
      } else {
        user.wishlist = user.wishlist.filter(num => num !== id);
      }
      localStorage.setItem("user", JSON.stringify(user));
      await fetch("http://localhost:5000/api/updatewishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id,
          wishlist: user.wishlist,
        }),
      });
    }
  };

  const handleCart = async () => {
    if (!user) {
      alert("Login First");
    } else {
      user.cart.push(id);
      localStorage.setItem("user", JSON.stringify(user));
      await fetch("http://localhost:5000/api/updateCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id,
          newCart: user.cart,
        }),
      });
    }
  };
  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 2)); // Max zoom = 2x
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 1)); // Min zoom = 1x
  const resetZoom = () => setZoom(1); // Reset to default

  return (
    <div className="card-wrapper">
      <div className="card" >
         {/* Image Wrapper for Zoom Control */}
         <div className="card-image">
          <img
            src={imageUrl}
            alt={name}
            style={{ transform: `scale(${zoom})` }}
          />
        </div>

        {/* Zoom Controls */}
        <div className="zoom-controls">
          <button onClick={zoomIn}><Plus /></button>
          <button onClick={zoomOut}><Minus /></button>
          <button onClick={resetZoom}>Reset</button>
        </div>
        <div className="card-buttons">
          <button onClick={heartHandle}>
            {liked ? <Heart fill="red" color="red" /> : <Heart />}
          </button>
          <button onClick={handleCart}>
            <ShoppingCart />
          </button>
        </div>
        <div className="txt">{text}</div>
      </div>

      {/* Name and Price Below the Card */}
      <div className="card-info">
        <h3 className="card-name">{name}</h3>
        {/* <p className="card-price">₹{price}</p> */}
      </div>
    </div>
  );
};

export default Card;
