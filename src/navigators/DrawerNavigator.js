import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackRoutesNavigator from "./StackRoutesNavigator";
import { DrawerContent } from "./DrawerContent";

import { Icon } from "native-base";
import colors from "../shared/colors";

import MapRoutes from "../screens/MapRoutes";
import DoneRoutes from "../screens/DoneRoutes";
import DownloadedRoutes from "../screens/DownloadedRoutes";
import Config from "../screens/Config";
import Help from "../screens/Help";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
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
        name="StackRoutesNavigator"
        component={StackRoutesNavigator}
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

export default DrawerNavigator;
