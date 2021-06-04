import React from "react";
import { Container, View, Text } from "native-base";
import { useSelector } from "react-redux";

import ScreenHeader from "../components/searchBar";
import RoutesListCmp from "../components/routesListCmp";

const DoneRoutes = ({ navigation }) => {
  const searchedRoutes = useSelector((state) => state.routes.searchedRoutes);

  return (
    <Container>
      <ScreenHeader title="Rutas Buscadas" navigation={navigation} />
      <View style={{ padding: 10 }}>
        <Text>Rutas ya escaladas</Text>
      </View>
    </Container>
  );
};

export default DoneRoutes;

{
  /* <Container>
<ScreenHeader title="Rutas Buscadas" navigation={navigation} />
<View style={{ padding: 10 }}>
  {searchedRoutes.length === 0 ? (
    <Text>No existen busquedas</Text>
  ) : (
    <RoutesListCmp routes={searchedRoutes} navigation={navigation} />
  )}
</View>
</Container> */
}
