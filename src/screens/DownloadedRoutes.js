import React from "react";
import { Container, View, Text } from "native-base";
import { useSelector } from "react-redux";

import ScreenHeader from "../components/searchBar";
import RoutesListCmp from "../components/routesListCmp";

const DownloadedRoutes = ({ navigation }) => {
  const downloadedRoutes = useSelector(
    (state) => state.routes.downloadedRoutes
  );

  return (
    <Container>
      <ScreenHeader title="Rutas Descargadas" navigation={navigation} />
      <View style={{ padding: 10 }}>
        {downloadedRoutes.length === 0 ? (
          <Text>No existen descargas</Text>
        ) : (
          <RoutesListCmp routes={downloadedRoutes} navigation={navigation} />
        )}
      </View>
    </Container>
  );
};

export default DownloadedRoutes;
