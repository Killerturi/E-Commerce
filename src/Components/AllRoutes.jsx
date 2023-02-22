import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Sign_up_in/Login";
import SignUp from "./Sign_up_in/SignUp";
import Home from "../Home/Home"

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
