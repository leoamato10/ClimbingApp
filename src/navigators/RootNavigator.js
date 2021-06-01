import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";

import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import Splash from "../screens/Splash";

import * as SecureStore from "expo-secure-store";
import { useSelector, useDispatch } from "react-redux";
import { RESTORE_TOKEN } from "../Store/actions/authTypes";
import { loginUser } from "../Store/actions/auth";

const LoginStack = createStackNavigator();

const RootNavigator = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getKey = async () => {
      try {
        const email = await SecureStore.getItemAsync("email");
        const password = await SecureStore.getItemAsync("password");
        !email || !password ? null : dispatch(loginUser(email, password));
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
        {auth.isLoading ? (
          <LoginStack.Screen name="Splash" component={Splash} />
        ) : !auth.user ? (
          <>
            <LoginStack.Screen name="Login" component={Login} />
            <LoginStack.Screen name="CreateAccount" component={CreateAccount} />
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
