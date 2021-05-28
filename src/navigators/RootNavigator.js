import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";

import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import Splash from "../screens/Splash";
import routeDetail from "../screens/routeDetail";

import * as SecureStore from "expo-secure-store";
import { useSelector, useDispatch } from "react-redux";
import { RESTORE_TOKEN } from "../Store/actions/authTypes";

const LoginStack = createStackNavigator();

const RootNavigator = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getKey = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("key");
        (await userToken)
          ? dispatch({ type: RESTORE_TOKEN, payload: userToken })
          : null;
      } catch (e) {
        console.log(e);
      }
      // console.log("estesiiii: ", userToken);
    };

    getKey();
  }, []);

  const stackNavigatorOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: "transparent" },
    cardStyleInterpolator: ({ current: { progress } }) => ({
      cardStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
          extrapolate: "clamp",
        }),
      },
    }),
  };

  return (
    <NavigationContainer>
      <LoginStack.Navigator screenOptions={stackNavigatorOptions}>
        {!auth.userToken == null ? (
          <LoginStack.Screen name="Splash" component={Splash} />
        ) : !auth.user ? (
          <>
            <LoginStack.Screen name="Login" component={Login} />
            <LoginStack.Screen name="CreateAccount" component={CreateAccount} />
            <LoginStack.Screen name="routeDetail" component={routeDetail} />
          </>
        ) : (
          <LoginStack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
          />
        )}
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
