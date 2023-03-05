import React from "react";
import "./Product.css";

const Product = (props) => {
  const { item, typeOfProduct } = props;
  const { id, name, img, price, mrp } = item;

  return (
    <>
      <div className="boxpart">
        <img src={img} alt="" />
        <div className="product_text">
          <h4>{name}</h4>
          <p>{price}</p>
          <span>{mrp}</span>
        </div>
      </div>
    </>
  );
};

export default Product;
