import firebase from "firebase";
import * as SecureStore from "expo-secure-store";

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  USER_LOGOUT,
} from "./authTypes";

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = (email, password) => {
  const persistUser = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  };

  return async (dispatch) => {
    try {
      await dispatch({ type: LOGIN_USER });
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      await persistUser("email", email);
      await persistUser("password", password);
      await dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: LOGIN_USER_FAIL, payload: error.message });
    }
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      await SecureStore.deleteItemAsync("email");
      await SecureStore.deleteItemAsync("password");
      await dispatch({ type: USER_LOGOUT });
    } catch (error) {
      console.log("LOGOUT ERROR: ", error);
    }
  };
};

export const createAccountWithEmail = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_USER });
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAIL, payload: error.message });
  }
};
