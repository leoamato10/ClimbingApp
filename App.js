import React from "react";
import { StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import Navigators from "./src/navigators/navigators";
import routesReducer from "./src/Store/reducers/routes";

const rootReducer = combineReducers({
  routes: routesReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <StyleProvider style={getTheme(material)}>
      <Provider store={store}>
        <Navigators />
      </Provider>
    </StyleProvider>
  );
}
