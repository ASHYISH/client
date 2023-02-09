import React from "react";
import "./Product.scss";
import dummyImg from "../../assets/naruto.jpeg";

function Product() {
  return (
    <div className="Product">
      <div className="product-container">
        <div className="product-img">
          <div className="img-container">
            <img src={dummyImg} alt="" id="img" />
          </div>
        </div>

        <div className="product-info">
          <p className="title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            perspiciatis.
          </p>

          <p className="price">549 rs</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
