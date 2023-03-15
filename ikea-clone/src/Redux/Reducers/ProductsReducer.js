const intialData = {
  bedding: [],
  sofa: [],
};

export const productReducer = (state = intialData, action) => {
  // console.log(action.payload, "fsdfsdfas");
  switch (action.type) {
    case "BEDDING":
      return { ...state, bedding: action.payload };
    case "SOFA":
      return { ...state, sofa: action.payload };
    default:
      return state;
  }
};
