import React from "react";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import { RiFilterOffLine } from "@react-icons/all-files/ri/RiFilterOffLine";
import Sort from "../Filters/Sort";
import NumOfSeats from "./NumOfSeats";
import Category from "./Category";
import Price from "./Price";
import Shape from "./Shape";
import { useState } from "react";
import "./../Sofa/Sofa1.css";
import { useDispatch, useSelector } from "react-redux";
import { myStore } from "../../../Redux/Store";
import {
  LoadingActionOFF,
  LoadingActionON,
  thunkActionProductsSofa,
} from "../../../Redux/Action/productAction";
function Filters({ getData, url, page }) {
  const { dispatch, getState } = myStore;
  const [filterBox, setFilterBox] = useState("");

  const maindta = useSelector((dta) => {
    return dta.productReducer.bedding;
  });

  const clearFilters = async () => {
    dispatch(LoadingActionON(dispatch));
    setFilterBox("CLEAR");
    let data = await getData(page, url);
    console.log(data);
    dispatch(thunkActionProductsSofa(dispatch, getState, data));
    dispatch(LoadingActionOFF(dispatch));
  };

  return (
    <div>
      <div
        className="Filters_productList"
        style={{ display: "block", marginTop: "20px" }}
      >
        <button
          onClick={() => {
            if (filterBox == "SORT") {
              setFilterBox("");
            } else {
              setFilterBox("SORT");
            }
          }}
        >
          {" "}
          Sort <FiChevronDown />{" "}
        </button>

        <button
          onClick={() => {
            if (filterBox == "CATEGORY") {
              setFilterBox("");
            } else {
              setFilterBox("CATEGORY");
            }
          }}
        >
          Category <FiChevronDown />{" "}
        </button>

        <button
          onClick={() => {
            if (filterBox == "PRICE") {
              setFilterBox("");
            } else {
              setFilterBox("PRICE");
            }
          }}
        >
          Price <FiChevronDown />{" "}
        </button>

        <button
          onClick={() => {
            if (filterBox == "SHAPE") {
              setFilterBox("");
            } else {
              setFilterBox("SHAPE");
            }
          }}
        >
          Shape <FiChevronDown />{" "}
        </button>

        <button onClick={clearFilters}>
          Clear Filters <RiFilterOffLine />{" "}
        </button>
      </div>

      <div>
        {filterBox == "SORT" ? <Sort url={url} page={page} /> : <></>}
        {filterBox == "NOS" ? <NumOfSeats /> : <></>}
        {filterBox == "CATEGORY" ? <Category /> : <></>}
        {filterBox == "PRICE" ? <Price /> : <></>}
        {filterBox == "SHAPE" ? <Shape /> : <></>}
        {filterBox == "CLEAR" ? <></> : <></>}
      </div>
    </div>
  );
}

export default Filters;
