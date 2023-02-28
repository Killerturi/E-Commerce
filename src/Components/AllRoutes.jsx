import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Sign_up_in/Login";
import SignUp from "./Sign_up_in/SignUp";
import Home from "../Home/Home"
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
          element={<PrivateRoute><Products typeOfProduct="mobilesandtablets" /></PrivateRoute>}
        ></Route>
        <Route
          path="/mobilesandtablets/:id"
          element={<PrivateRoute><SingleProduct typeOfProduct="mobilesandtablets" /></PrivateRoute>}
        ></Route>

        <Route
          path="/televisions"
         element={<PrivateRoute><Products typeOfProduct="television"/></PrivateRoute>}
        ></Route>
        <Route
          path="/televisions/:id"
         element={<PrivateRoute><SingleProduct typeOfProduct="television"/></PrivateRoute>}
        ></Route>

        <Route
        path="/kitchen"
        element={<PrivateRoute><Products typeOfProduct="kitchen"/></PrivateRoute>}
        ></Route>
        <Route
        path="/kitchen/:id"
        element={<PrivateRoute><SingleProduct typeOfProduct="kitchen"/></PrivateRoute>}
        ></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
