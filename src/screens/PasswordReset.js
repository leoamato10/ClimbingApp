import React, { useState } from "react";
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
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

const windowHeight = Dimensions.get("window").height;

const PasswordReset = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          padding: 5,
        }}
      >
        <Card>
          <CardItem>
            <View style={styles.logo}>
              <Image source={require("../../assets/logo/logo_app.png")} />
            </View>
          </CardItem>
          <CardItem header>
            <Text style={{ fontSize: 18 }}>
              Ingresa tus datos para acceder:
            </Text>
          </CardItem>
          <CardItem
            style={
              windowHeight > 500
                ? { height: windowHeight / 3 }
                : { height: windowHeight / 4 }
            }
          >
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
                    type="MaterialIcons"
                    name="person"
                    style={{ color: Colors.primary }}
                  />
                  <Input
                    placeholder="Correo"
                    placeholderTextColor={"black"}
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType={"next"}
                    style={{ color: Colors.primary }}
                    onChangeText={(user) => dispatch(emailChanged(user))}
                    value={auth.email}
                  />
                </Item>
              </View>

              {/* ERROR */}

              <View
                style={{
                  paddingVertical: 10,
                }}
              >
                {auth.error !== "" ? (
                  <Text style={styles.error}> {auth.error} </Text>
                ) : null}
              </View>

              <View>
                <Button
                  full
                  primary
                  onPress={() => dispatch(loginUser(auth.email, auth.password))}
                  style={{ marginBottom: 10, borderRadius: 40 }}
                >
                  {auth.isLoading ? (
                    <Spinner color="white" />
                  ) : (
                    <Text style={styles.buttonText}>RECUPERAR CONTRASEÑA</Text>
                  )}
                </Button>
              </View>
            </View>
          </CardItem>
        </Card>
      </View>
    </>
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
    marginVertical: windowHeight / 16,
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
    // fontWeight: "bold",
  },
});

export default PasswordReset;