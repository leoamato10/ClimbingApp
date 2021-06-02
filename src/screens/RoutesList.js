import React from "react";
import { View } from "native-base";

import { useSelector } from "react-redux";

import ScreenHeader from "../components/searchBar";
import RoutesListCmp from "../components/routesListCmp";

const RoutesScreen = ({ navigation }) => {
  const routes = useSelector((state) => state.routes.routes);

  return (
    <View style={{ backgroundColor: "white" }}>
      <ScreenHeader title="Listado de Rutas" navigation={navigation} />
      <View style={{ padding: 10 }}>
        <RoutesListCmp routes={routes} navigation={navigation} />
      </View>
    </View>
  );
};

export default RoutesScreen;
