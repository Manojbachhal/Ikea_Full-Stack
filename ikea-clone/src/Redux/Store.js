import {
  legacy_createStore as createstore,
  applyMiddleware,
  combineReducers,
} from "redux";

import logger from "redux-logger";
import signupReducer from "./Reducers/signupReducer";
import cartReducer from "./Reducers/cartReducer";
import wishReducer from "./Reducers/wishlistReducer";
import thunk from "redux-thunk";
import wishlistReducer from "./Reducers/wishlistReducer";
import { productReducer } from "./Reducers/ProductsReducer";
const combinedRedcers = combineReducers({
  productReducer,
  signupReducer,
  cartReducer,
  wishlistReducer,
});

export const myStore = createstore(
  combinedRedcers,
  applyMiddleware(thunk, logger)
);
