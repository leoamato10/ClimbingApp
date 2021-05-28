import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const ListRoutesStack = createStackNavigator();

const StackRoutesNavigator = () => {
  return (
    <ListRoutesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ListRoutesStack.Screen name="ListRoutes" component={ListRoutes} />
    </ListRoutesStack.Navigator>
  );
};

export default StackRoutesNavigator;
