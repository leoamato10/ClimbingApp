import React, { useEffect } from "react";
import { StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import firebase from "firebase";

import RootNavigator from "./src/navigators/RootNavigator";
import routesReducer from "./src/Store/reducers/routes";
import loginReducer from "./src/Store/reducers/auth";

const rootReducer = combineReducers({
  routes: routesReducer,
  auth: loginReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default function App() {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAHYn0MV5WYdfy-Q9bC7kD8f15MOGpSg7o",
        authDomain: "climbingappauth.firebaseapp.com",
        projectId: "climbingappauth",
        storageBucket: "climbingappauth.appspot.com",
        messagingSenderId: "503375832290",
        appId: "1:503375832290:web:f5b25c82aad6fa0b6f2abb",
      });
    } else {
      firebase.app(); // if already initialized, use that one
    }
    return () => "";
  }, []);

  return (
    <StyleProvider style={getTheme(material)}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </StyleProvider>
  );
}
