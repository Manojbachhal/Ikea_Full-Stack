const initialData = {
  cartData: [],
};

function cartReducer(state = initialData, action) {
  return { ...state, cartData: action.payload };
}
export default cartReducer;
