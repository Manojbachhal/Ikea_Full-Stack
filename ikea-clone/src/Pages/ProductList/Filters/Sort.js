import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import listAction from "../../../Redux/Action/listAction";
// import listSortAction from "../../../Redux/Action/listFirstAction";
import thunkActionProductsBedding, {
  LoadingActionOFF,
  LoadingActionON,
  thunkActionProductsSofa,
} from "../../../Redux/Action/productAction";
import { myStore } from "../../../Redux/Store";
import axios from "axios";

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

function Sort({ page }) {
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
  const handleFilter = (ele, index) => {
    switch (ele.title) {
      case "Price : low to high":
        // let data;

        (async function () {
          dispatch(LoadingActionON(dispatch));

          let data = await axios.get(
            `http://localhost:4000/products/sofa?page=${page}&sort=asc`
          );
          if (data.data.data.data.length > 0) {
            dispatch(
              thunkActionProductsSofa(dispatch, getState, data.data.data.data)
            );
          }
          dispatch(LoadingActionOFF(dispatch));
          // console.log(data.data.data.data);
        })();

        break;
      case "Price : high to low":
        dispatch(LoadingActionON(dispatch));
        (async function () {
          let data = await axios.get(
            `http://localhost:4000/products/sofa?page=${page}&sort=dsc`
          );

          if (data.data.data.data.length > 0) {
            dispatch(
              thunkActionProductsSofa(dispatch, getState, data.data.data.data)
            );
          }
          dispatch(LoadingActionOFF(dispatch));

          // console.log(data.data.data.data);
        })();

        break;
      case "Name":
        let arr = productData.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          } else {
            return 0;
          }
        });
        // console.log(arr);
        dispatch(thunkActionProductsSofa(dispatch, getState, arr));
        break;

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
                onClick={(e) => {
                  // e.target.style.color = "red";
                  handleFilter(ele);
                }}
                style={buttonStyle}
              >
                {" "}
                {/* <input
                  type="radio"
                  name="aman"
                  width="40px"
                  id={index + "s"}
                />{" "} */}
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
