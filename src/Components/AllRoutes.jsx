import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Sign_up_in/Login";
import SignUp from "./Sign_up_in/SignUp";
import Home from "../Home/Home";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Products from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/mobilesandtablets"
          element={
            <PrivateRoute>
              <Products typeOfProduct="mobilesandtablets" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/mobilesandtablets/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="mobilesandtablets" />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/televisions"
          element={
            <PrivateRoute>
              <Products typeOfProduct="television" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/televisions/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="television" />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/kitchen"
          element={
            <PrivateRoute>
              <Products typeOfProduct="kitchen" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/kitchen/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="kitchen" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/headphones"
          element={
            <PrivateRoute>
              <Products typeOfProduct="headphones" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/headphones/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="headphones" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/homeappliances"
          element={
            <PrivateRoute>
              <Products typeOfProduct="homeappliances" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/homeappliances/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="homeappliances" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/computers"
          element={
            <PrivateRoute>
              <Products typeOfProduct="computers" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/computers/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="computers" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/cameras"
          element={
            <PrivateRoute>
              <Products typeOfProduct="cameras" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/cameras/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="cameras" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/personalcare"
          element={
            <PrivateRoute>
              <Products typeOfProduct="personalcare" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/personalcare/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="personalcare" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/accessories"
          element={
            <PrivateRoute>
              <Products typeOfProduct="accessories" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/accessories/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="accessories" />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
