import { myStore } from "../Store";
const thunkActionProductsBedding = (dispatch, getState, payload) => {
  // console.log(data, "actin");
  return (dispatch = {
    type: "BEDDING",
    payload,
  });
};

export const thunkActionProductsBeds = (dispatch, getState, payload) => {
  const data = getState().productReducer.beds;
  // console.log(data);
  if (data.length == 0) {
    // console.log(data, "actin");
    return (dispatch = {
      type: "BEDDING",
      payload,
    });
  }
};

export const thunkActionProductsBedsideTable = (
  dispatch,
  getState,
  payload
) => {
  const data = getState().productReducer.beds;
  // console.log(data);
  if (data.length == 0) {
    // console.log(data, "actin");
    return (dispatch = {
      type: "BEDDING",
      payload,
    });
  }
};

export const thunkActionProductsBookCase = (dispatch, getState, payload) => {
  const data = getState().productReducer.beds;
  // console.log(data);
  if (data.length == 0) {
    // console.log(data, "actin");
    return (dispatch = {
      type: "BEDDING",
      payload,
    });
  }
};

export const thunkActionProductsFurniture = (dispatch, getState, payload) => {
  const data = getState().productReducer.beds;
  // console.log(data);
  if (data.length == 0) {
    // console.log(data, "actin");
    return (dispatch = {
      type: "BEDDING",
      payload,
    });
  }
};

export const thunkActionProductsMattress = (dispatch, getState, payload) => {
  const data = getState().productReducer.beds;
  // console.log(data);
  if (data.length == 0) {
    // console.log(data, "actin");
    return (dispatch = {
      type: "BEDDING",
      payload,
    });
  }
};

export const thunkActionProductsTable = (dispatch, getState, payload) => {
  const data = getState().productReducer.beds;
  // console.log(data);
  if (data.length == 0) {
    // console.log(data, "actin");
    return (dispatch = {
      type: "BEDDING",
      payload,
    });
  }
};

export const thunkActionProductsUBS = (dispatch, getState, payload) => {
  const data = getState().productReducer.beds;
  // console.log(data);
  if (data.length == 0) {
    // console.log(data, "actin");
    return (dispatch = {
      type: "BEDDING",
      payload,
    });
  }
};

export const thunkActionProductsSofa = (dispatch, getState, payload) => {
  return (dispatch = {
    type: "SOFA",
    payload,
  });
};

export const LoadingActionON = (dispatch) => {
  return (dispatch = {
    type: "LoadingON",
  });
};
export const LoadingActionOFF = (dispatch) => {
  return (dispatch = {
    type: "LoadingOFF",
  });
};
// };

export default thunkActionProductsBedding;
