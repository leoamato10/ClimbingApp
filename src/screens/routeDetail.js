import React from "react";
import {
  Container,
  Content,
  Icon,
  Header,
  Left,
  Text,
  Body,
  Right,
  View,
} from "native-base";
import { StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { toggleDownloaded } from "../Store/actions/routes";
import { FlatList } from "react-native-gesture-handler";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const routeDetail = ({ navigation, route }) => {
  const routes = useSelector((state) => state.routes.routes);
  const { item, isDownloaded } = route.params;

  const dispatch = useDispatch();
  const toggleDownloadedHandler = () => {
    dispatch(toggleDownloaded(item.id));
  };

  return (
    <Container style={styles.Container}>
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
      <View style={{ padding: 10 }}>
        <View style={{ paddingBottom: 100, backgroundColor: "lightgray" }}>
          <Text>Dificultad</Text>
          <Text>{item.difficulty}</Text>
        </View>
        <View style={{ flexDirection: "row", padding: 15 }}>
          <Left>
            <Text>Subsectores</Text>
          </Left>
          <Right>
            <Icon
              type="MaterialCommunityIcons"
              name="download"
              style={{
                fontSize: 35,
                color: "black",
              }}
              onPress={toggleDownloaded} //corregir navegacion (pasar de stack a drawer)
            />
          </Right>
        </View>
        <View style={{ flexDirection: "column" }}>
          <FlatList
            data={item.subsectores}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <ListItem>{item.name}</ListItem>}
          />
        </View>
      </View>
    </Container>
  );
};

export default routeDetail;

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingVertical: 10,
  },
});
