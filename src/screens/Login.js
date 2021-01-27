import React from "react";
import { Image, Text, StyleSheet, ImageBackground } from "react-native";
import {
  Button,
  Container,
  Content,
  View,
  Item,
  Input,
  Icon,
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Colors from "../shared/colors";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/login_background.jpg")}
      style={styles.Container}
    >
      <Grid>
        <Row style={styles.row1}>
          <Image
            style={styles.image}
            source={require("../../assets/logo/logo.png")}
          />
          <Text style={styles.Text}>CLIMBING LOC</Text>
        </Row>
        <Row style={styles.row2}>
          <View style={styles.inputsContainer}>
            <Item regular style={{ backgroundColor: "#5B5B5B4F" }}>
              <Input
                placeholder="Usuario"
                placeholderTextColor={Colors.primary}
                autoCorrect={false}
                autoCapitalize="none"
                style={{ color: "white" }}
              />
            </Item>
            <Item regular style={{ backgroundColor: "#5B5B5B4F" }}>
              <Input
                placeholder="Contraseña"
                placeholderTextColor={Colors.primary}
                autoCorrect={false}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                style={{ color: "white" }}
              />
              <Icon
                active
                name="eye"
                style={{ fontSize: 25, color: Colors.primary }}
              />
            </Item>
            <Button
              full
              primary
              style={styles.buttons}
              onPress={() => navigation.navigate("HomeNav")}
            >
              <Text style={styles.buttonText}>INGRESAR</Text>
            </Button>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "80%",
              marginBottom: 50, //aca hay van a haber problemas
            }}
          >
            <Button light style={{ width: 100, justifyContent: "center" }}>
              <Icon type="FontAwesome" name="google" />
            </Button>
            <Button light style={{ width: 100, justifyContent: "center" }}>
              <Icon type="FontAwesome" name="facebook" />
            </Button>
          </View>
        </Row>
      </Grid>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...StyleSheet.absoluteFillObject,
  },
  row1: {
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 100,
  },
  row2: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputsContainer: {
    marginTop: 150,
    width: "80%",
    height: 180,
    justifyContent: "space-between",
  },
  buttons: {
    justifyContent: "center",
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
