import axios from "axios";
import types from "../constants";
import { BASEURL } from "../../../config";

export const loginUser = (body) => async (dispatch) => {
  try {
    let result = await axios.post(`${BASEURL}/api/login`, body);
    console.log("result.data");
    console.log(result);
    if (result.status === 200) {
      dispatch({
        type: types.USER_LOGIN,
        payload: result.data,
      });
      dispatch({
        type: types.NOTIFICATION_MSG,
        payload: "You have successfully logged in",
      });
      setTimeout(() => {
        dispatch({
          type: types.NOTIFICATION_MSG,
          payload: false,
        });
      }, 3000);
    }
    if (result.status === 404) {
      console.log(result.data.result);
      dispatch({
        type: types.NOTIFICATION_MSG,
        payload: result.data.result,
      });
      setTimeout(() => {
        dispatch({
          type: types.NOTIFICATION_MSG,
          payload: false,
        });
      }, 3000);
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.INTERNET_ERROR,
      payload: "Error",
    });
  }
};
export const Logout = (body) => async (dispatch) => {
  dispatch({
    type: types.USER_LOGIN,
    payload: false,
  });
};

export const signUpUser = (user) => async (dispatch) => {
  try {
    console.log("result");
    console.log(user);
    let result = await axios.post(`${BASEURL}/api/register`, user);
    console.log("result");
    console.log(result);
    if (result.status === 200) {
      dispatch({
        type: types.NOTIFICATION_MSG,
        payload: result.data.msg,
      });
      setTimeout(() => {
        dispatch({
          type: types.NOTIFICATION_MSG,
          payload: false,
        });
      }, 3000);
    }
  } catch (error) {
    console.log("Error");
    console.log(error);
    dispatch({
      type: types.NOTIFICATION_MSG,
      payload: "Error",
    });
  }
};
