import React from "react";
import { Container, Right, Icon, Header, Left, View, Text } from "native-base";

import { useSelector } from "react-redux";

import RoutesListCmp from "../components/routesListCmp";

const RoutesScreen = ({ navigation }) => {
  const routes = useSelector((state) => state.routes.routes);

  return (
    <Container>
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
            Lista de rutas
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
        <RoutesListCmp listData={routes} navigation={navigation} />
      </View>
    </Container>
  );
};

export default RoutesScreen;
