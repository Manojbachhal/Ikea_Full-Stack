import React from "react";
import { useDispatch, useSelector } from "react-redux";
import listAction from "../../../Redux/Action/listAction";
import listSortAction from "../../../Redux/Action/listFirstAction";
import thunkActionProductsBedding, {
  thunkActionProductsSofa,
} from "../../../Redux/Action/productAction";
import { myStore } from "../../../Redux/Store";

const FilterStyle = {
  zIndex: "1",
  position: "absolute",
  top: "190px",
  left: "80px",
  border: "0px solid",
  backgroundColor: "white",
  padding: "15px",
  borderRadius: "10px",
};

const buttonStyle = {
  border: "0px",
  margin: "3px",
  backgroundColor: "white",
  fontSize: "18px",
};

function Sort() {
  const data = [
    {
      title: "Price : low to high",
    },
    {
      title: "Price : high to low",
    },
    {
      title: "Name",
    },
    {
      title: "Best match",
    },
    {
      title: "Newest",
    },
    {
      title: "Most popular",
    },
  ];

  const productData = useSelector((productlist) => {
    return productlist.productReducer.sofa;
  });

  const { dispatch, getState } = myStore;
  const handleFilter = (ele) => {
    switch (ele.title) {
      case "Price : low to high":
        let arr = productData.sort(function (a, b) {
          // console.log(a.salesPrice_numeral);
          return a.salesPrice_numeral - b.salesPrice_numeral;
        });

        dispatch(thunkActionProductsSofa(dispatch, getState, arr));

      // break;
      case "Price : high to low":
        productData.sort(function (a, b) {
          return b.salesPrice_numeral - a.salesPrice_numeral;
        });
        dispatch(thunkActionProductsSofa(dispatch, getState, productData));

      // break;
      case "Name":
        productData.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          } else {
            return 0;
          }
        });
        dispatch(thunkActionProductsSofa(dispatch, getState, productData));
      // break;

      default:
        break;
    }
  };

  return (
    <div style={FilterStyle}>
      {data.length > 0 &&
        data.map((ele, index) => {
          return (
            <div key={index + 1}>
              <button
                onClick={() => {
                  handleFilter(ele);
                }}
                style={buttonStyle}
              >
                {" "}
                <input type="radio" name="aman" width="40px" />{" "}
                <label>{ele.title}</label>{" "}
              </button>
              <br />
            </div>
          );
        })}
    </div>
  );
}

export default Sort;
