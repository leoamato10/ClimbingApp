import React from "react";
import { Image, Text, StyleSheet, ImageBackground } from "react-native";
import { Button, View, Item, Input, Icon } from "native-base";

import Colors from "../shared/colors";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/login_background.jpg")}
      style={styles.Container}
    >
      <View>
        <View style={styles.logo}>
          <Image source={require("../../assets/logo/logo.png")} />
          <Text style={styles.Text}>CLIMBING LOC</Text>
        </View>

        <View style={{ padding: 15 }}>
          <View>
            <Item regular style={{ backgroundColor: "#ccc", marginBottom: 10 }}>
              <Input
                placeholder="Usuario"
                placeholderTextColor={Colors.primary}
                autoCorrect={false}
                autoCapitalize="none"
                style={{ color: "white" }}
              />
            </Item>
            <Item regular style={{ backgroundColor: "#ccc", marginBottom: 20 }}>
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
          </View>

          <View>
            <Button
              full
              primary
              onPress={() => navigation.navigate("HomeNav")}
              style={{ marginBottom: 10 }}
            >
              <Text style={styles.buttonText}>INGRESAR</Text>
            </Button>
            <View style={styles.buttonsContainer}>
              <Button
                style={{
                  width: "47%",
                  justifyContent: "center",
                  backgroundColor: "#ccc",
                }}
              >
                <Icon
                  type="FontAwesome"
                  name="google"
                  style={{ color: Colors.primary }}
                />
              </Button>
              <Button
                style={{
                  width: "47%",
                  justifyContent: "center",
                  backgroundColor: "#ccc",
                }}
              >
                <Icon
                  type="FontAwesome"
                  name="facebook"
                  style={{ color: Colors.primary }}
                />
              </Button>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...StyleSheet.absoluteFillObject,
  },
  logo: {
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50, //aca hay van a haber problemas
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
