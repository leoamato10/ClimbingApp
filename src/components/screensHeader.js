import React from "react";
import { Right, Icon, Header, Left, View, Text } from "native-base";
import { StyleSheet } from "react-native";

const screensHeader = ({ title, navigation }) => {
  return (
    <Header transparent>
      <Left style={styles.headerLeft}>
        <Icon
          type="MaterialCommunityIcons"
          name="menu"
          style={{ fontSize: 35, color: "black" }}
          onPress={() => navigation.toggleDrawer()}
        />
        <Text style={{ fontSize: 20, paddingLeft: 15 }} numberOfLines={1}>
          {title}
        </Text>
      </Left>

      <Right>
        <Icon
          type="MaterialIcons"
          name="search"
          style={{ fontSize: 30, color: "black" }}
          onPress={() => () => ""}
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

export default screensHeader;
