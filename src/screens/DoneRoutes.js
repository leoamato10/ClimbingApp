import React from "react";
import { Container, View, Text } from "native-base";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import ScreenHeader from "../components/screensHeader";
import RoutesListCmp from "../components/routesListCmp";

const DoneRoutes = ({ navigation }) => {
  const downloadedRoutes = useSelector(
    (state) => state.routes.downloadedRoutes
  );

  return (
    <Container>
      <ScreenHeader title="Rutas Escaladas" navigation={navigation} />
      <View style={{ padding: 10 }}>
        <Text>No existen vías escaladas</Text>
      </View>
    </Container>
  );
};

export default DoneRoutes;
