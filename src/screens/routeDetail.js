import React from "react";
import {
  Container,
  Icon,
  Left,
  Text,
  Right,
  View,
  Button,
  Body,
  Content,
} from "native-base";
import {
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { toggleDownloaded } from "../Store/actions/routes";

import RouteDetailHeader from "../components/routeDetailHeader";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const subsectoresList = () => {
  return (
    <View>
      <ListItem icon>
        <Left>
          <Button style={{ backgroundColor: "#FF9501" }}>
            <Icon active name="airplane" />
          </Button>
        </Left>
        <Body>
          <Text>Airplane Mode</Text>
        </Body>
        <Right>
          <Text>hi</Text>
        </Right>
      </ListItem>
    </View>
  );
};

const screenWidth = Dimensions.get("window").width;

const routeDetail = ({ navigation, route }) => {
  const routes = useSelector((state) => state.routes.routes);
  const { item, isDownloaded } = route.params;

  const dispatch = useDispatch();
  const toggleDownloadedHandler = () => {
    dispatch(toggleDownloaded(item.id));
  };

  return (
    <>
      {/* HEADER */}
      <RouteDetailHeader item={item} navigation={navigation} />

      {/* CONTENEDOR GENERAL */}
      <ScrollView>
        <View style={{ flex: 1 }}>
          {/* IMAGEN */}
          <View style={{ backgroundColor: "lightgray" }}>
            <Image
              style={{ width: screenWidth, height: 450 }}
              source={{
                uri: "https://escalandocommx.files.wordpress.com/2017/01/rutas-8-11-escuelita-cu-a.jpg",
              }}
            />
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                with: 150,
                height: 60,
                padding: 20,
              }}
            >
              <Text
                style={{ fontSize: 25, color: "white", fontWeight: "bold" }}
              >
                Dificultad
              </Text>
              <Text style={{ fontSize: 25, color: "white" }}>
                {item.difficulty}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", padding: 10 }}>
            <Left>
              <Text style={{ fontSize: 22 }}>Subsectores</Text>
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

          {/* LISTA DE SUBSECTORES */}
          {/* <View style={{ backgroundColor: "#ccc", flex: 1 }}>
            <FlatList
              data={item.subsectores}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => <ListItem>{item.name}</ListItem>}
            />
          </View> */}
          {routes.map(function () {
            return subsectoresList;
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default routeDetail;

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
  },
});
