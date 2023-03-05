import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import "./Product.css";

const Products = ({ typeOfProduct }) => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(`https://rus-digital-api.vercel.app/${typeOfProduct}`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, [typeOfProduct]);


  const category = {
    mobilesandtablets: "MOBILES AND TABLETS",
    televisions: "TELEVISIONS",
    headphones: "HEADPHONES",
    homeappliances: "HOME-APPLIANCES",
    computers: "COMPUTERS",
    cameras: "CAMERAS",
    kitchen: "KITCHEN-APPLIANCES",
    personalcare: "PERSONAL-CARE",
    accessories: "ACCESSORIES",
    whishlist:"whishlist"
  };


  return (
    <>
 
    <div>
      <h1 className="Producthading">{category[typeOfProduct]}</h1>
      <div className="products">
        {data.map((item) => {
          return (
            <div>
              <Product item={item} typeOfProduct={typeOfProduct} />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Products;
