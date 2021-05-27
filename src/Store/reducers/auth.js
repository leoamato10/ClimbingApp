import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  USER_LOGOUT,
} from "../actions/authTypes";

const initialState = {
  email: "",
  password: "",
  user: null,
  error: "",
  loading: false,
};

export default loginReducer = (state = initialState, action) => {
  console.log("ACTIONS CONSOLE LOG: ", action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...initialState, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, loading: false };
    case USER_LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
