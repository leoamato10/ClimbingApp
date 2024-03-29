import React from "react";
import { Container, Text, Icon, Header, Left, View } from "native-base";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import ScreenHeader from "../components/screensHeader";
import RoutesListCmp from "../components/routesListCmp";

const RoutesScreen = ({ navigation }) => {
  const routes = useSelector((state) => state.routes.routes);

  return (
    <Container>
      <ScreenHeader title="Configuracion" navigation={navigation} />
      <View style={{ padding: 10 }}>
        <Text>Config Screen</Text>
      </View>
    </Container>
  );
};

export default RoutesScreen;
