import React from "react";
import {
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Button, View, Item, Input, Icon, Spinner } from "native-base";
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
      <View style={{ flex: 1, paddingBottom: 150 }}>
        <View
          style={{ alignItems: "flex-end", paddingTop: 20, paddingRight: 20 }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateAccount")}
          >
            <Text style={styles.buttonText}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logo}>
          <Image source={require("../../assets/logo/logo.png")} />
          <Text style={styles.Text}>CLIMBING LOC</Text>
        </View>

        {/* FORM */}
        <View style={{ padding: 15 }}>
          {/* BOTONES INPUTS */}
          <View>
            <Item regular style={{ backgroundColor: "#ccc", marginBottom: 10 }}>
              <Input
                placeholder="Usuario"
                placeholderTextColor={Colors.primary}
                autoCorrect={false}
                autoCapitalize="none"
                style={{ color: Colors.primary }}
                onChangeText={(user) => dispatch(emailChanged(user))}
                value={auth.email}
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
                onChangeText={(password) => dispatch(passwordChanged(password))}
              />
              <Icon
                active
                name="eye"
                style={{ fontSize: 25, color: Colors.primary }}
              />
            </Item>
          </View>

          {/* ERROR */}

          <View style={{ paddingBottom: 15 }}>
            {auth.error !== "" ? (
              <Text style={styles.error}>{auth.error}</Text>
            ) : null}
          </View>

          {/* BOTONES INGRESAR-GOOGLE-FACEBOOK*/}
          <View style={{ paddingBottom: 15 }}>
            <Button
              full
              primary
              onPress={() => dispatch(loginUser(auth.email, auth.password))}
              style={{ marginBottom: 10 }}
            >
              {auth.isLoading ? (
                <Spinner color="white" />
              ) : (
                <Text style={styles.buttonText}>INGRESAR</Text>
              )}
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

          {/* RECUPERAR CONTRASEÑA */}
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "white" }}>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
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
