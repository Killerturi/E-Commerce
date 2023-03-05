import React from "react";
import "./Product.css";
import { BsSuitHeart } from "react-icons/bs";

const Product = (props) => {
  const { item, typeOfProduct } = props;
  const { id, name, img, price, mrp } = item;

  return (
    <>
      <div className="boxpart">
        <img src={img} alt="" />
        <div className="product_text">
          <h4>{name.slice(0,54)}</h4>
          <div className="productprice">
          <span>₹{price}</span>
          <span style={{textDecoration:"line-through"}}>₹{mrp}</span>
          </div>
          <div className="buttondiv">
          <button>OFFERS AVAILABLE</button>
          </div>
          <div>
          <button className="lastbutton">WISHLIST</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
