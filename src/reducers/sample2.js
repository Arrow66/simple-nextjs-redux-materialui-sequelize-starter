import { FETCHSAMPLE2, SHOWERRORSAMPLE2 } from "../constants";

const initialState = {
  user: [],
  message: "",
  showError: false
};

export const sample2 = (state = initialState, action) => {
  switch (action.type) {
    case FETCHSAMPLE2:
      return {
        ...state,
        user: action.payload,
        message: action.message
      };
    case SHOWERRORSAMPLE2:
      return {
        ...state,
        showError: true
      };

    default:
      return state;
  }
};
