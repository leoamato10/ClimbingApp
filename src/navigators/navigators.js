import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "native-base";

import colors from "../shared/colors";

import { DrawerContent } from "./drawerContent";
import Login from "../screens/Login";
import MapRoutes from "../screens/MapRoutes";
import ListRoutes from "../screens/ListRoutes";
import DoneRoutes from "../screens/DoneRoutes";
import routeDetail from "../screens/routeDetail";
import DownloadedRoutes from "../screens/DownloadedRoutes";
import Config from "../screens/Config";
import Help from "../screens/Help";

const LoginStack = createStackNavigator();
const ListRoutesStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <LoginStack.Screen name="Login" component={Login} />
        <LoginStack.Screen name="HomeNav" component={HomeNav} />
        <LoginStack.Screen name="routeDetail" component={routeDetail} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

const HomeNav = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="MapRoutes"
        component={MapRoutes}
        options={{
          title: "Vista de Mapa",
          drawerIcon: ({ focused, size }) => (
            <Icon
              type="MaterialCommunityIcons"
              name="map"
              style={{ color: focused ? colors.primary : "#ccc" }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ListRoutesNav"
        component={ListRoutesNav}
        options={{
          title: "Vista de Lista",
          drawerIcon: ({ focused, size }) => (
            <Icon
              type="MaterialCommunityIcons"
              name="format-list-bulleted"
              style={{ color: focused ? colors.primary : "#ccc" }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="DownloadedRoutes"
        component={DownloadedRoutes}
        options={{
          title: "Descargados",
          drawerIcon: ({ focused, size }) => (
            <Icon
              type="MaterialCommunityIcons"
              name="download"
              style={{ color: focused ? colors.primary : "#ccc" }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Escaladas"
        component={DoneRoutes}
        options={{
          title: "Vias escaladas",
          drawerIcon: ({ focused, size }) => (
            <Icon
              type="Foundation"
              name="mountains"
              style={{ color: focused ? colors.primary : "#ccc" }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Config"
        component={Config}
        options={{
          title: "Configuracion",
          drawerIcon: ({ focused, size }) => (
            <Icon
              type="MaterialIcons"
              name="settings"
              style={{ color: focused ? colors.primary : "#ccc" }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Ayuda"
        component={Help}
        options={{
          title: "Ayuda",
          drawerIcon: ({ focused, size }) => (
            <Icon
              type="MaterialIcons"
              name="help"
              style={{ color: focused ? colors.primary : "#ccc" }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const ListRoutesNav = () => {
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

export default Navigators;
