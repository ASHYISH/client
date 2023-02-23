import React from "react";
import "./Cart.scss";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import CartItem from "../cartItem/CartItem";
import { useSelector } from "react-redux";

function Cart({ onClose }) {
  const cart = useSelector((state) => state.cartReducer.cart);
  let totalamount = 0;
  cart.forEach((item) => (totalamount += item.quantity * item.price));
  const isCartEmpty = cart.length === 0;

  return (
    <div className="Cart">
      <div className="overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="header">
          <h3>Shopping Cart</h3>
          <div className="close-btn" onClick={onClose}>
            <AiOutlineClose /> Close
          </div>
        </div>
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem cart={item} key={item.key} />
          ))}
        </div>
        {isCartEmpty && (
          <div className="empty-cart-info">
            <div className="icon">
              <BsCartX />
            </div>
            <h4>Cart is Empty</h4>
          </div>
        )}
        {!isCartEmpty && (
          <div className="checkout-info">
            <div className="total-amount">
              <h3 className="total-message">Total:</h3>
              <h3 className="total-value">₹ {totalamount} </h3>
            </div>

            <div className="checkout btn-primary">Checkout-now</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
