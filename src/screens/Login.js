import React from "react";
import {
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  Button,
  View,
  Item,
  Input,
  Icon,
  Spinner,
  Body,
  Card,
  CardItem,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";

import {
  loginUser,
  emailChanged,
  passwordChanged,
} from "../Store/actions/auth";

import Colors from "../shared/colors";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <ImageBackground
      source={require("../../assets/images/login_background.jpg")}
      style={styles.Container}
    >
      <View
        style={{
          // borderColor: "red",
          // borderWidth: 5,
          justifyContent: "center",
          flex: 1,
          padding: 10,
        }}
      >
        <Card>
          <CardItem
            style={
              {
                // borderColor: "blue",
                // borderWidth: 5,
              }
            }
          >
            <View style={styles.logo}>
              <Image source={require("../../assets/logo/logo.png")} />
              <Text style={styles.Text}>CLIMBING LOC</Text>
            </View>
          </CardItem>
          <CardItem
            header
            style={
              {
                // borderColor: "green",
                // borderWidth: 5,
              }
            }
          >
            <Text style={{ fontSize: 18 }}>
              Ingresa tus datos para acceder:
            </Text>
          </CardItem>
          <CardItem
            style={{
              // borderColor: "yellow",
              // borderWidth: 5,
              height: 300,
            }}
          >
            <Body>
              {/* FORM */}
              <View style={{ width: "100%" }}>
                {/* BOTONES INPUTS */}
                <View>
                  <Item
                    rounded
                    regular
                    style={{ backgroundColor: "#ccc", marginBottom: 10 }}
                  >
                    <Icon
                      type="FontAwesome"
                      name="user"
                      style={{ color: Colors.primary }}
                    />
                    <Input
                      placeholder="Usuario"
                      placeholderTextColor={"black"}
                      autoCorrect={false}
                      autoCapitalize="none"
                      style={{ color: Colors.primary }}
                      onChangeText={(user) => dispatch(emailChanged(user))}
                      value={auth.email}
                    />
                  </Item>
                  <Item
                    rounded
                    regular
                    style={{ backgroundColor: "#ccc", marginBottom: 20 }}
                  >
                    <Icon
                      type="MaterialIcons"
                      name="lock"
                      style={{ color: Colors.primary }}
                    />
                    <Input
                      placeholder="Contraseña"
                      placeholderTextColor={"black"}
                      autoCorrect={false}
                      textContentType="password"
                      secureTextEntry
                      autoCapitalize="none"
                      style={{ color: Colors.primary }}
                      onChangeText={(password) =>
                        dispatch(passwordChanged(password))
                      }
                    />
                    <Icon
                      active
                      name="eye"
                      style={{ fontSize: 25, color: Colors.primary }}
                    />
                  </Item>
                </View>

                {/* ERROR */}

                <View>
                  {auth.error !== "" ? (
                    <Text style={styles.error}>{auth.error}</Text>
                  ) : null}
                </View>

                {/* BOTONES INGRESAR-GOOGLE-FACEBOOK*/}
                <View>
                  <Button
                    full
                    primary
                    onPress={() =>
                      dispatch(loginUser(auth.email, auth.password))
                    }
                    style={{ marginBottom: 10, borderRadius: 40 }}
                  >
                    {auth.isLoading ? (
                      <Spinner color="white" />
                    ) : (
                      <Text style={styles.buttonText}>INGRESAR</Text>
                    )}
                  </Button>
                </View>

                {/* RECUPERAR CONTRASEÑA */}
                <View style={{ alignItems: "center" }}>
                  <Text style={{ color: "black" }}>
                    ¿Olvidaste tu contraseña?{" "}
                    <Text
                      style={{
                        color: Colors.primary,
                        fontWeight: "bold",
                      }}
                    >
                      Recuperar contraseña.
                    </Text>
                  </Text>
                </View>
              </View>
            </Body>
          </CardItem>
          <CardItem>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateAccount")}
              >
                <Text style={[styles.buttonText, { color: Colors.primary }]}>
                  Crear cuenta
                </Text>
              </TouchableOpacity>
            </View>
          </CardItem>
        </Card>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...StyleSheet.absoluteFillObject,
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Text: {
    color: Colors.primary,
    fontSize: 22,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  error: {
    color: "red",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Login;
