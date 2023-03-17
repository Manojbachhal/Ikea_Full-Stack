const intialData = {
  bedding: [],
  sofa: [],
  isLoading: true,
};

export const productReducer = (state = intialData, action) => {
  // console.log(action.payload, "fsdfsdfas");
  switch (action.type) {
    case "BEDDING":
      return { ...state, bedding: action.payload };
    case "SOFA":
      return { ...state, sofa: action.payload };
    case "LoadingON":
      return { ...state, isLoading: true };
    case "LoadingOFF":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
