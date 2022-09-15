import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
// import { ImCross } from "react-icons/Im";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);


  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const thankyounote = () =>{
    alert('Thanks for Shopping');
 
    
  }




const navigate = useNavigate();

  
  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>x</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Amount</span>
        <span>$ {price}</span>
      </div>
      <button className="checkout" onClick={(thankyounote)}> Proceed to Checkout</button>
    </article>
  );
};

export default Cart;






