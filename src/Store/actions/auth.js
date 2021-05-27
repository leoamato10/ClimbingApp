import firebase from "firebase";
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
  return async (dispatch) => {
    dispatch({ type: LOGIN_USER });

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      })
      .catch((error) => {
        dispatch({ type: LOGIN_USER_FAIL, payload: error.message });
      });
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: USER_LOGOUT });
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("LOGOUT ERROR: ", error);
      });
  };
};

export const createAccountWithEmail = (email, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
