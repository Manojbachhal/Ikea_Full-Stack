import { myStore } from "../Store";
export const cartAction = (elem, dispatch) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: elem,
  });
};
// export const cartQtyAction = (elem, dispatch) => {
//   return myStore.dispatch({
//     type: "ADD",
//     payload: elem,
//   });
// };
// export const cartSubAction = (elem, dispatch) => {
//   return myStore.dispatch({
//     type: "SUB",
//     payload: elem,
//   });
// };
// export const cartDeleteAction = (elem, dispatch) => {
//   return myStore.dispatch({
//     type: "DELETE",
//     payload: elem,
//   });
// };
