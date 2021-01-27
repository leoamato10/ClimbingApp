import React from "react";
import {
  Container,
  Body,
  Right,
  Icon,
  Header,
  Left,
  View,
  Text,
} from "native-base";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import RoutesListCmp from "../components/routesListCmp";

const DownloadedRoutes = ({ navigation }) => {
  const downloadedRoutes = useSelector(
    (state) => state.routes.downloadedRoutes
  );

  return (
    <Container style={styles.Container}>
      <Header transparent>
        <Left
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon
            type="MaterialCommunityIcons"
            name="menu"
            style={{
              fontSize: 35,
              color: "black",
            }}
            onPress={() => navigation.toggleDrawer()}
          />
          <Text style={{ fontSize: 20, paddingLeft: 15 }} numberOfLines={1}>
            Rutas descargadas
          </Text>
        </Left>

        <Right>
          <Icon
            type="MaterialIcons"
            name="search"
            style={{
              fontSize: 30,
              color: "black",
            }}
            onPress={() => navigation.toggleDrawer()}
          />
        </Right>
      </Header>
      <View style={{ padding: 10 }}>
        {downloadedRoutes.length === 0 ? (
          <Text>No existen descargas</Text>
        ) : (
          <RoutesListCmp listData={downloadedRoutes} navigation={navigation} />
        )}
      </View>
    </Container>
  );
};

export default DownloadedRoutes;

const styles = StyleSheet.create({
  Container: {
    // backgroundColor: "gray",
    // flex: 1,
  },
});
