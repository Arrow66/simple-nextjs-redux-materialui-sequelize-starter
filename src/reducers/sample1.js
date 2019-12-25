import { FETCHSAMPLE1, SHOWERRORSAMPLE1 } from "../constants";

const initialState = {
  fruits: [],
  message: "",
  showError: false
};

export const sample1 = (state = initialState, action) => {
  switch (action.type) {
    case FETCHSAMPLE1:
      return {
        ...state,
        fruits: action.payload,
        message: action.message
      };
    case SHOWERRORSAMPLE1:
      return {
        ...state,
        message: action.message,
        showError: true
      };

    default:
      return state;
  }
};
