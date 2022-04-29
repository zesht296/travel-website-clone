import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/pages/Home";
import Products from "./component/pages/Products";
import Services from "./component/pages/Services";
import SignUp from "./component/pages/SignUp";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="sign-up" exact element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
