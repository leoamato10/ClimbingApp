import React from "react";
import { Container, Content, Icon, Header, Left, View } from "native-base";
import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import Cards from "../components/cards";

const List = ({ navigation }) => {
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
        <FlatList
          data={routes}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Cards item={item} />}
        />
      </View>
    </Container>
  );
};

export default List;

const styles = StyleSheet.create({
  Container: {
    // backgroundColor: "gray",
    // flex: 1,
  },
});
