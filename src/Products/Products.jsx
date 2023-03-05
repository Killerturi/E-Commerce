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
  }, []);

  return (
    <>
      <div className="products">
        {data.map((item) => {
          return (
            <div>
              <Product item={item} typeOfProduct={typeOfProduct} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
