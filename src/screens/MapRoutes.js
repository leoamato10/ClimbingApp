import React from "react";
import { Image, Text, StyleSheet, ImageBackground } from "react-native";
import {
  Container,
  Content,
  Icon,
  Header,
  Left,
  Body,
  Right,
} from "native-base";

import Colors from "../shared/colors";

import Map from "../components/map";
// import CarouselMap from "../components/mapClass1";

const Home = ({ navigation }) => {
  return (
    <Container style={styles.Container}>
      {/* <ImageBackground
        source={require("../../assets/images/login_background.jpg")}
        style={{ flex: 1, resizeMode: "cover" }}
      > */}
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
            Cerca de mi
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
      <Content>
        <Map />
        {/* <CarouselMap /> COMPONENT TO TEST CALLOUT FROM MARKERS*/}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  row1: {
    // height: 50,
  },
  row2: {
    // height: 400,
  },
  buttonsContainer: {
    marginTop: 100,
  },
  buttons: {
    width: 135,
    margin: 10,
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
    width: 117,
    marginTop: 100,
  },
  Text: {
    color: Colors.primary,
    fontSize: 22,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Home;
