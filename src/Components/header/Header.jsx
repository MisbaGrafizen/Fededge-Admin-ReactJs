import React from "react";
import { Link, useLocation } from "react-router-dom";
import dashboard from "../../../public/img/Sidebar-icon/dashboard.png";
import orders from "../../../public/img/Sidebar-icon/orders.png";
import users from "../../../public/img/Sidebar-icon/user.png";
import feedback from "../../../public/img/Sidebar-icon/feedback.png";
import master from "../../../public/img/Sidebar-icon/master.png";

import product from "../../../public/img/Sidebar-icon/product.png";
import splash from "../../../public/img/Sidebar-icon/splash.png";
import tick from "../../../public/img/Sidebar-icon/green-tick.png";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname; // Get the current path

  return (
    <div className="h-[100%] my-auto">
      <div className="h-[100%] rounded-tr-[19px] md150:py-[40%] py-[20%] relative rounded-br-[19px] md11:w-[78px] md150:w-[90px] border-t-[1px] border-r-[1px] border-b-[1px] flex flex-col justify-between items-center border-[#a53d35]">
        <div className="mx-auto justify-between flex flex-col h-[100%]">
          <div className="relative flex items-center">
            <img
              className="w-[35px] cursor-pointer"
              src={dashboard}
              alt=""
              onClick={() => (window.location.pathname = "/")}
            />
            {currentPath === "/" && (
              <img
                className="absolute left-[-35px] w-[30px]"
                src={tick}
                alt="Selected"
              />
            )}
          </div>

          <Link to="/orders-management">
            <div className="relative flex items-center">
              <img className="w-[35px] cursor-pointer" src={orders} alt="" />
              {currentPath === "/orders-management" && (
                <img
                  className="absolute left-[-35px] w-[30px]"
                  src={tick}
                  alt="Selected"
                />
              )}
            </div>
          </Link>
          <Link to="">
            <div className="relative flex items-center">
              <img className="w-[35px] cursor-pointer" src={orders} alt="" />
              {currentPath === "" && (
                <img
                  className="absolute left-[-35px] w-[30px]"
                  src={tick}
                  alt="Selected"
                />
              )}
            </div>
          </Link>

          <Link to="/contact-management">
            <div className="relative flex items-center">
              <img className="w-[35px] cursor-pointer" src={users} alt="" />
              {currentPath === "/contact-management" && (
                <img
                  className="absolute left-[-35px] w-[30px]"
                  src={tick}
                  alt="Selected"
                />
              )}
            </div>
          </Link>

          <Link to="/">
            <div className="relative flex items-center">
              <img className="w-[35px] cursor-pointer" src={feedback} alt="" />
              {currentPath === "" && (
                <img
                  className="absolute left-[-35px] w-[30px]"
                  src={tick}
                  alt="Selected"
                />
              )}
            </div>
          </Link>

          <Link to="">
            <div className="relative flex items-center">
              <img className="w-[35px] cursor-pointer" src={master} alt="" />
              {currentPath === "" && (
                <img
                  className="absolute left-[-35px] w-[30px]"
                  src={tick}
                  alt="Selected"
                />
              )}
            </div>
          </Link>

          {/* <Link to="/premvati-management">
            <div className="relative flex items-center">
              <img className="w-[35px] cursor-pointer" src={premvati} alt="" />
              {currentPath === "/premvati-management" && (
                <img
                  className="absolute left-[-35px] w-[30px]"
                  src={tick}
                  alt="Selected"
                />
              )}
            </div>
          </Link> */}

          <Link to="">
            <div className="relative flex items-center">
              <img className="w-[35px] cursor-pointer" src={product} alt="" />
              {currentPath === "" && (
                <img
                  className="absolute left-[-35px] w-[30px]"
                  src={tick}
                  alt="Selected"
                />
              )}
            </div>
          </Link>

          <Link to="">
            <div className="relative flex items-center">
              <img className="w-[35px] cursor-pointer" src={splash} alt="" />
              {currentPath === "" && (
                <img
                  className="absolute left-[-35px] w-[30px]"
                  src={tick}
                  alt="Selected"
                />
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}