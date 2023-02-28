import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Postlogin/Home";
import ProductList  from "../Pages/Postlogin/Product/ProductList"
import SideBar from "../Pages/Postlogin/Nav/SideBar";
import OrderList from "../Pages/Postlogin/Order/OrderList";
import BrandList from "../Pages/Postlogin/Brand/BrandList";
import CustomerList from "../Pages/Postlogin/Customer/CustomerList";

const PrivateRoute = () => {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order/orderList" element={<OrderList />} />
            <Route path="/product/ProductList" element={<ProductList/>} />
            <Route path="/Brand/BrandList" element={<BrandList/>} />
            <Route path="/Customer/CustomerList" element={<CustomerList/>} />
            <Route path="*" element={<>not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default PrivateRoute;
