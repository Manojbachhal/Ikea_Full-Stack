import { myStore } from "../Store";
export const cartAction = (elem, dispatch) => {
  // console.log(elem);
  dispatch({
    type: "ADD_TO_CART",
    payload: elem,
  });
};
