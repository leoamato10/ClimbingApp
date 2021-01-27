import React from "react";
import { Container, Text, Icon, Header, Left, View } from "native-base";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import RoutesListCmp from "../components/routesListCmp";

const RoutesScreen = ({ navigation }) => {
  const routes = useSelector((state) => state.routes.routes);

  return (
    <Container style={styles.Container}>
      <Header transparent>
        <Left style={{ flex: 1 }}>
          <Icon
            type="MaterialCommunityIcons"
            name="menu"
            style={{
              fontSize: 35,
              color: "black",
            }}
            onPress={() => navigation.toggleDrawer()}
          />
        </Left>
      </Header>
      <View style={{ padding: 10 }}>
        <Text>Config Screen</Text>
      </View>
    </Container>
  );
};

export default RoutesScreen;

const styles = StyleSheet.create({
  Container: {
    // backgroundColor: "gray",
    // flex: 1,
  },
});
