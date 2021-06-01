import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RoutesList from "../screens/RoutesList";
import RouteDetail from "../screens/RouteDetail";

const RoutesListStack = createStackNavigator();

const stackNavigatorOptions = {
  headerShown: false,
};

const StackRoutesNavigator = () => {
  return (
    <RoutesListStack.Navigator screenOptions={stackNavigatorOptions}>
      <RoutesListStack.Screen name="RoutesList" component={RoutesList} />
      <RoutesListStack.Screen name="RouteDetail" component={RouteDetail} />
    </RoutesListStack.Navigator>
  );
};

export default StackRoutesNavigator;
