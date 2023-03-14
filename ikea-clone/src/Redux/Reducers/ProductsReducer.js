const intialData = {
  bedding: [],
};

export const productReducer = (state = intialData, action) => {
  console.log(action.payload, "fsdfsdfas");
  switch (action.type) {
    case "BEDDING":
      return { ...state, bedding: action.payload };

    default:
      return state;
  }
};
