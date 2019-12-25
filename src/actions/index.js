import { FETCHSAMPLE1, SHOWERRORSAMPLE1 } from "../constants";

export const fetchData = data => {

  return dispatch => {
    dispatch({
      type: FETCHSAMPLE1,
      payload: data.payload,
      message: data.message
    });
  };
  
};

export const showError = data => {
  return dispatch => {
    dispatch({
      type: SHOWERRORSAMPLE1,
      payload: data.payload,
      message: data.message
    });
  };
};
