import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutUs/AboutUs";
import SecondLandingManage from "./pages/seondLandingManage/SecondLandingManage";
import { Container } from "postcss";
import ConatactUs from "./pages/contactus/ConatactUs";

function App() {
  return (
    <>
      <Routes>
       
      <Route path="/" element={<AboutUs />} />
      <Route path="/second-manage" element={<SecondLandingManage />} />
      <Route path="/contact-management" element={<ConatactUs />} />
      </Routes>
    </>
  );
}

export default App;
