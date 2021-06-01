import React from "react";
import { Right, Icon, Header, Left, Body, Text } from "native-base";
import { StyleSheet } from "react-native";

const routeDetailHeader = ({ item, navigation }) => {
  return (
    <Header transparent>
      <Left style={{ flex: 1 }}>
        <Icon
          type="MaterialIcons"
          name="arrow-back"
          style={{
            fontSize: 35,
            color: "black",
          }}
          onPress={() => navigation.goBack()} //corregir navegacion (pasar de stack a drawer)
        />
      </Left>
      <Body>
        <Text>{item.title}</Text>
      </Body>
      <Right>
        <Icon
          type="MaterialCommunityIcons"
          name="information"
          style={{
            fontSize: 35,
            color: "black",
          }}
          onPress={() => navigation.goBack()} //corregir navegacion (pasar de stack a drawer)
        />
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
  headerLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default routeDetailHeader;
