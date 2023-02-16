import React from "react";
import dummyImg from "../../assets/naruto.jpeg";

import "./ProductDetail.scss";

function ProductDetail() {
  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-img center">
            <div className="img-container">
              <img src={dummyImg} alt="product img" />
            </div>
          </div>
          <div className="product-info">
            <h1 className="heading">Lorem ipsum dolor sit amet consectetur.</h1>
            <h3 className="price">455</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              quis ullam dicta ab explicabo suscipit illum qu ae, impedit saepe
              ut voluptatem quod totam sunt natus alias optio. Odio mollitia
            </p>

            <div className="cart-options">
              <div className="quantity-selector">
                <span className="btn decrement">-</span>
                <span className="quantity">3</span>
                <span className="btn increment">+</span>
              </div>
              <button className="btn-primary add-to-cart">Add to Cart</button>
            </div>
            <div className="return-policy">
              <ul>
                <li>
                  This product is made to order and is typically printed in 3-6
                  working days. Your entire order will ship out together.
                </li>
                <li>
                  Since this product is printed on demand especially for you, it
                  is not eligible for cancellations and returns. Read our Return
                  Policy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
