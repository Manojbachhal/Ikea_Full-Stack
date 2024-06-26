import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiUser } from "@react-icons/all-files/bi/BiUser";
import { FiTruck } from "@react-icons/all-files/fi/FiTruck";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { MdAddShoppingCart } from "@react-icons/all-files/md/MdAddShoppingCart";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { HiSearch } from "@react-icons/all-files/hi/HiSearch";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { GrCamera } from "@react-icons/all-files/gr/GrCamera";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";
import { useSelector } from "react-redux";
import { signinAction } from "../../Redux/Action/signupAction";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const [user, setuser] = useState(
    JSON.parse(localStorage.getItem("userName"))
  );

  const data = useSelector((storedData) => {
    return storedData.signupReducer;
  });
  const cartdata = useSelector((store) => {
    return store.cartReducer.cartData;
  });
  let length = 0;
  // console.log(cartdata)
  if (typeof cartdata === "object") {
    // console.log(cartdata.length)
    length = cartdata.length;
  }

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <nav
        className=""
        style={{
          position: "fixed",
          top: "0",
          backgroundColor: "white",
          width: "100%",
          zIndex: "10",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "",
            alignItems: "center",
            textAlign: "center",
            height: "90px",
            borderBottom:
              "solid 1px rgb(var(--colour-neutral-2, 245, 245, 245))",
          }}
        >
          <div className="col-1" style={{ textAlign: "center" }}>
            <p
              onClick={() => {
                document.getElementById("leftSidebar").style.display = "block";
              }}
              style={{ textAlign: "center" }}
            >
              {" "}
              <FiMenu />{" "}
            </p>
            <p className="d-none d-md-block" style={{ textAlign: "center" }}>
              {" "}
              Menu
            </p>
          </div>
          <Link to="/">
            <img
              src="https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
              alt="logo"
              width="100%"
            />
          </Link>

          <span
            id="search1"
            className=" d-flex mx-3 col-6 p-1 d-none d-md-block"
          >
            <span>
              {" "}
              <HiSearch className="col-1" />{" "}
            </span>{" "}
            <input
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              style={{ color: "black" }}
              type="search"
              placeholder="What are you looking for?"
              name=""
              id="search"
              className=" p-2 col-10 rounded border-0"
            />
            <GrCamera />
          </span>

          <h4
            id="loginsvg"
            className="col-2 mx-2 sm-col-2 d-flex justify-content-center"
            style={{ fontSize: "14px", alignItems: "center" }}
            onClick={() => {
              document.getElementById("rightSidebar").style.display = "block";
            }}
          >
            <BiUser className="my-1" />
            <span className="d-none d-md-block pt-1 mx-2 my-1">
              {data.Auth
                ? JSON.parse(localStorage.getItem("userName"))
                : "Hej! Log in or sign up"}
            </span>{" "}
          </h4>

          {data.Auth ? (
            <h4
              onClick={() => {
                localStorage.removeItem("userName");
                localStorage.removeItem("Token");
                signinAction(false);
              }}
              style={{ marginLeft: "-20px" }}
            >
              <FiLogOut />{" "}
            </h4>
          ) : (
            ""
          )}

          <h4 className="dch mx-3">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/delivery"
            >
              <FiTruck />
            </Link>
          </h4>
          <h4 className="dch">
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                margin: "0 25px",
              }}
              to="/favourites"
            >
              <AiOutlineHeart />
            </Link>
          </h4>
          <div className="carticon">
            <h4 className="dch">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/cart"
              >
                <MdAddShoppingCart />
              </Link>
            </h4>
            <div
              className="cartqty"
              style={{ display: length > 0 ? "flex" : "none" }}
            >
              {length}
            </div>
            {/* cartdata.length */}
          </div>
        </div>

        <div
          className="thirdnav d-none d-md-block"
          style={{ height: "0px", marginTop: "10px" }}
        >
          <Link
            to="/product-page"
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "20px",
            }}
          >
            <b>Products</b>
          </Link>

          <Link
            to="/product-page"
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "20px",
            }}
          >
            <b>Rooms</b>
            <span className="text-light bg-warning p-1 ms-2">
              Under Devlopment
            </span>
          </Link>
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "20px",
            }}
          >
            <b>New at IKEA</b>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "20px",
            }}
          >
            <b>Offers</b>
          </Link>
        </div>

        <span
          id="search1"
          className=" d-flex  col-11 d-md-none d-lg-none m-auto mt-4 justify-content-center"
        >
          <AiOutlineSearch className="col-1" />
          <input
            type="search"
            name=""
            id="search"
            className="p-3 px-5 col-10 rounded border-0"
          />
        </span>

        <div id="leftSidebar" style={{ display: "none" }}>
          <div
            className="d-flex py-4"
            onClick={() => {
              document.getElementById("leftSidebar").style.display = "none";
            }}
          >
            <p>
              {" "}
              <FaTimes />{" "}
            </p>
            <Link to="/" className="mx-4">
              <img
                src="https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="d-grid">
            <div className="px-5  pb-3 d-grid">
              <h3>
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="product-page"
                >
                  Products
                </Link>
              </h3>
              <h3>
                <Link id="right" style={{ lineHeight: "40px" }}>
                  Rooms
                  <span className="text-light bg-warning ms-2 p-1">
                    Under Devlopment
                  </span>
                </Link>
              </h3>
              <h3>
                <Link id="right" style={{ lineHeight: "40px" }} to="signup">
                  New at IKEA
                </Link>
              </h3>
              <h3>
                <Link id="right" style={{ lineHeight: "40px" }}>
                  Offers
                  <span className="text-light bg-warning ms-2 p-1">
                    Under Devlopment
                  </span>
                </Link>
              </h3>
            </div>

            <div className="px-5 pb-3 d-grid">
              <Link
                id="right"
                style={{ lineHeight: "40px" }}
                onClick={() => {
                  // console.log(typeof document.getElementById('submenu1').style.display)
                  {
                    document
                      .getElementById("submenu1")
                      .classList.toggle("submenu1v");
                  }
                }}
              >
                {" "}
                <b>Furniture</b>{" "}
                <span className="text-light bg-warning ms-2 p-1">
                  Under Devlopment
                </span>
              </Link>
              <div className="px-5 pb-3" id="submenu1">
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/product-page"
                >
                  {" "}
                  Sofas & Sofa-beds{" "}
                </Link>
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/product-page"
                >
                  {" "}
                  Furniture sets
                </Link>
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/product-page"
                >
                  {" "}
                  Beds
                </Link>
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/product-page"
                >
                  {" "}
                  Bookcases & shelving units
                </Link>
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/product-page"
                >
                  {" "}
                  Tables
                </Link>
              </div>

              <Link
                id="right"
                style={{ lineHeight: "40px" }}
                onClick={() => {
                  {
                    document
                      .getElementById("submenu2")
                      .classList.toggle("submenu2v");
                  }
                }}
              >
                {" "}
                <b>Decoration</b>
                <span className="text-light bg-warning ms-2 p-1">
                  Under Devlopment
                </span>
              </Link>
              <div className="px-5 pb-3" id="submenu2">
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/product-page"
                >
                  {" "}
                  Frames & pictures{" "}
                </Link>
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/product-page"
                >
                  {" "}
                  Plants & flowers
                </Link>
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/product-page"
                >
                  {" "}
                  Storage boxes & baskets
                </Link>
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/product-page"
                >
                  {" "}
                  Flower pots & planters
                </Link>
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/product-page"
                >
                  {" "}
                  Mirrors
                </Link>
              </div>

              <Link
                id="right"
                style={{ lineHeight: "40px" }}
                className="Beds&mattresses"
                onClick={() => {
                  {
                    document
                      .getElementById("submenu3")
                      .classList.toggle("submenu3v");
                    // document.getElementById("submenu3").style.display == "none"
                    //   ? (document.getElementById("submenu3").style.display =
                    //       "grid")
                    //   : (document.getElementById("submenu3").style.display =
                    //       "none");
                  }
                }}
              >
                {" "}
                <b>Beds & mattresses</b>
              </Link>

              <div className="px-5 pb-3" id="submenu3">
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/product-page"
                  // onClick={() => {
                  //   handleRoute(BedData.moreProducts.productWindow);
                  // }}
                >
                  {" "}
                  Beds{" "}
                </Link>
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/Bedding"
                  //   onClick={() => {
                  //     handleRoute(BeddingData.moreProducts.productWindow);
                  //   }}
                >
                  {" "}
                  Bedding
                </Link>
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/product-page"
                  // onClick={() => {
                  //   handleRoute(MattressData.moreProducts.productWindow);
                  // }}
                >
                  {" "}
                  Mattresses
                  <span class="text-light ms-2 bg-warning">
                    {" "}
                    under devlopment
                  </span>
                </Link>
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/product-page"
                  // onClick={() => {
                  //   handleRoute(BedSideTablesData.moreProducts.productWindow);
                  // }}
                >
                  {" "}
                  Bedside tables
                  <span class="text-light ms-2 bg-warning">
                    {" "}
                    under devlopment
                  </span>
                </Link>
                <Link
                  id="right"
                  style={{ lineHeight: "40px" }}
                  to="/product-page"
                  // onClick={() => {
                  //   handleRoute(BedData.moreProducts.productWindow);
                  // }}
                >
                  {" "}
                  Under bed storage
                  <span class="text-light ms-2 bg-warning">
                    {" "}
                    under devlopment
                  </span>
                </Link>
              </div>
            </div>

            <div className="px-5 d-grid ">
              <Link
                style={{
                  lineHeight: "40px",
                  textDecoration: "none",
                  color: "black",
                }}
                to="/signup"
              >
                Join IKEA Family
              </Link>
              <Link
                style={{
                  lineHeight: "40px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                IKEA Business
                <span className="text-light bg-warning ms-2 p-1">
                  Under Devlopment
                </span>
              </Link>
              <Link
                style={{
                  lineHeight: "40px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                IKEA Restaurant
                <span className="text-light bg-warning ms-2 p-1">
                  Under Devlopment
                </span>
              </Link>
              <Link
                style={{
                  lineHeight: "40px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Our stores
                <span className="text-light bg-warning ms-2 p-1">
                  Under Devlopment
                </span>
              </Link>
              <Link
                style={{
                  lineHeight: "40px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Design your room
                <span className="text-light bg-warning ms-2 p-1">
                  Under Devlopment
                </span>
              </Link>
              <Link
                style={{
                  lineHeight: "40px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Customer service
                <span className="text-light bg-warning ms-2 p-1">
                  Under Devlopment
                </span>
              </Link>
              <Link
                style={{
                  lineHeight: "40px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Download the IKEA app
                <span className="text-light bg-warning ms-2 p-1">
                  Under Devlopment
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div id="rightSidebar" style={{ display: "none", height: "100%" }}>
          <div className="p-4 " style={{ backgroundColor: "#0058A3" }}>
            <p
              className="text-end px-4 "
              onClick={() => {
                document.getElementById("rightSidebar").style.display = "none";
              }}
            >
              <FaTimes id="temp" />
            </p>
          </div>

          <div
            className="d-flex justify-content-between pt-3 px-5 pb-4"
            style={{ backgroundColor: "#0058A3" }}
          >
            <h1
              style={{
                color: "white",
                fontSize: "2.25rem",
                fontWeight: "bold",
              }}
            >
              Hej <span></span>
            </h1>
            <button
              id="rightlogin hov"
              onClick={() => {
                document.getElementById("rightSidebar").style.display = "none";
              }}
            >
              <Link id="right" to="sign-in">
                Log in
              </Link>
            </button>
          </div>

          <div
            className="d-flex justify-content-between p-3 px-5 "
            style={{
              backgroundColor: "#0058A3",
              borderTop: "1px solid #007CC1",
              borderBottom: "1px solid #007CC1",
            }}
          >
            <h3 style={{ fontSize: "14px", fontWeight: "bold" }} id="hov">
              <Link
                style={{ lineHeight: "40px", color: "white" }}
                to="signup"
                onClick={() => {
                  document.getElementById("rightSidebar").style.display =
                    "none";
                }}
              >
                {" "}
                Join IKEA Family
              </Link>
            </h3>
            <h3>
              <FaChevronRight />
            </h3>
          </div>

          <div
            className="d-flex justify-content-between p-3 px-5"
            style={{ backgroundColor: "#0058A3" }}
          >
            <h3 style={{ fontSize: "14px", fontWeight: "bold" }} id="hov">
              <Link style={{ lineHeight: "40px", color: "white" }}>
                Join IKEA Business Network
              </Link>
            </h3>
            <h3>
              <FaChevronRight />
            </h3>
          </div>

          <div
            className="p-3 px-5 bg-white"
            style={{ height: "100%", textAlign: "initial" }}
          >
            <p id="hov">Purchase history</p>
            <p id="hov">Shopping list</p>
            <p id="hov">Planners</p>
          </div>
        </div>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </nav>
      <div style={{ height: "120px" }}></div>
    </>
  );
}

export default Navbar;
