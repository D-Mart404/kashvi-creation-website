import React, { useState } from "react";
import "./ShoppingCart.css";
import { useSareeContext } from "../Sarrecontext";
import axios from 'axios';
const ShoppingCart1 = () => {
  const { sarees } = useSareeContext();
  
  const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;   
  };

  const user = getUser();

  const [cart, setCart] = useState(
    user 
      ? sarees
          .filter((item) => user.cart.includes(item.id))
          .map((item) => ({ ...item, quantity: 1 })) 
      : []
  );

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
      )
      .filter((item) => item.quantity > 0); 
  
    setCart(updatedCart);
  
    const updatedUser = { ...user, cart: updatedCart.map((item) => item.id) };
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
 const handleinvoice=async()=>{
  try {
    const response = await axios.post("http://localhost:5000/api/send-invoice", {
      email: user.email,
      username: user.username,
      amount: totalAmount,
      items: cart.map((item) => ({
        name: item.name,
        quantity: item.quantity,
      })),
    });

    alert(response.data.message);
  } catch (error) {
    console.error("Error sending invoice:", error);
    alert("Failed to send invoice.");
  }
 };


  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.Imageurl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">
        <h3>Total: ₹{totalAmount}</h3>
        <button className="checkout-btn" onClick={handleinvoice}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart1;