import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cat/Cart";
import Content from "./content/Content";
import Dashboard from "./Dashboard/Dashboard";
import Product from "./Dashboard/Product/Product";
import Users from "./Dashboard/User/Users";
export default function Routerjs({
  shop,
  Filter,
  all,
  addlocart,
  cart,
  setcart,
}) {
  return (
    <>
      <Routes>
      <Route path='/product' element={<Product/>}/>
      <Route path='/users' element={<Users/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home addlocart={addlocart} />} />
        <Route
          path="/shop"
          element={
            <Shop shop={shop} Filter={Filter} all={all} addlocart={addlocart} />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} setcart={setcart} />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </>
  );
}
