import { fetchData, showError } from "../actions";
import Axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
const API_URL = serverRuntimeConfig.API_URL
  ? serverRuntimeConfig.API_URL
  : publicRuntimeConfig.API_URL;

export const genFetch = endPoint => {
  return async dispatch => {
    let fetchURL = API_URL + endPoint;

    try {
      let response = await Axios(fetchURL, {
        method: "get",
        data: null,
        headers: {
          "content-type": "application/json"
        }
      });

      console.log("RESPONSE", response);
      dispatch(
        fetchData({
          payload: response.data.data,
          message: response.status
        })
      );
    } catch (error) {
      dispatch(
        showError({
          payload: error,
          message: error.status
        })
      );
    }
  };
};
