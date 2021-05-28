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
  const save = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  };

  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_USER });
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          save("key", user.user.uid);
          dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
        });
    } catch (error) {
      dispatch({ type: LOGIN_USER_FAIL, payload: error.message });
    }
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    try {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          SecureStore.deleteItemAsync("key");
          dispatch({ type: USER_LOGOUT });
        });
    } catch (error) {
      console.log("LOGOUT ERROR: ", error);
    }
  };
};

export const createAccountWithEmail = (email, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      })
      .catch((error) => {
        dispatch({ type: LOGIN_USER_FAIL, payload: error.message });
      });
  };
};

// export const loginUser = (email, password) => {
//   return (dispatch) => {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((user) => {
//         dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
//       })
//       .catch((error) => {
//         dispatch({ type: LOGIN_USER_FAIL, payload: error.message });
//       });
//   };
// };

// firebase
//           .auth()
//           .createUserWithEmailAndPassword(email, password)
//           .then((user) => {
//             dispatch({ type: LOGIN_USER_FAIL, payload: user });
//           });
