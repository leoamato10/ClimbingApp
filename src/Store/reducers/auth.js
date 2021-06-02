import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  USER_LOGOUT,
  CREATE_USER_SUCCESS,
  RESTORE_TOKEN,
} from "../actions/authTypes";

const initialState = {
  email: "",
  password: "",
  user: null,
  error: "",
  isLoading: false,
  isLoging: false,
  userToken: "",
};

export default loginReducer = (state = initialState, action) => {
  // console.log("ACTIONS CONSOLE LOG: ", action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER:
      return { ...state, isLoading: true, error: "", isLoging: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...initialState,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, isLoading: false };

    case USER_LOGOUT:
      return { ...state, user: null, userToken: "" };

    case CREATE_USER_SUCCESS:
      return { ...state, user: action.payload };

    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.payload,
        user: {},
      };

    default:
      return state;
  }
};
