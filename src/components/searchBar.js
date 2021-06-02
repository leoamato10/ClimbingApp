import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Dimensions,
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const { Value, timing } = Animated;

const inputBoxTraslateX = new Value(width);
const backButtonOpacity = new Value(0);
const contentTraslateY = new Value(height);
const contentOpacity = new Value(0);

const screensHeader = ({ title, navigation }) => {
  const [isFocused, setisFocused] = useState(false);
  const [keyword, setkeyword] = useState("");
  const inputRef = useRef();

  const onFocus = () => {
    setisFocused(true);
    const inputBoxTraslateXconfig = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    const backButtonOpacityConfig = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };

    //CONTENT
    const contentTraslateYconfig = {
      duration: 0,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    const contentOpacityConfig = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };

    //RUN ANIMATIONS
    timing(inputBoxTraslateX, inputBoxTraslateXconfig).start();
    timing(backButtonOpacity, backButtonOpacityConfig).start();
    // timing(contentTraslateY, contentTraslateYconfig).start();
    timing(contentOpacity, contentOpacityConfig).start();

    inputRef.current.focus();
  };

  const onBlur = () => {
    setisFocused(false);
    const inputBoxTraslateXconfig = {
      duration: 200,
      toValue: width,
      easing: Easing.inOut(Easing.ease),
    };
    const backButtonOpacityConfig = {
      duration: 50,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    //CONTENT
    const contentTraslateYconfig = {
      duration: 0,
      toValue: height,
      easing: Easing.inOut(Easing.ease),
    };

    const contentOpacityConfig = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    //RUN ANIMATIONS
    timing(inputBoxTraslateX, inputBoxTraslateXconfig).start();
    timing(backButtonOpacity, backButtonOpacityConfig).start();
    // timing(contentTraslateY, contentTraslateYconfig).start();
    timing(contentOpacity, contentOpacityConfig).start();

    inputRef.current.blur();
  };

  return (
    <View style={styles.container}>
      <View style={styles.SafeAreaView}>
        <View style={styles.header}>
          <View style={styles.headerInner}>
            <View>
              <TouchableOpacity
                activeOpacity={1}
                underlayColor={"#ccd0d5"}
                onPress={() => navigation.toggleDrawer()}
                // style={styles.searchIconBox}
              >
                <MaterialIcons name="menu" size={35} color="black" />
              </TouchableOpacity>
            </View>
            <View
              style={{ paddingLeft: 10, flex: 1, justifyContent: "center" }}
            >
              <Text style={{ fontSize: 20 }}>{title}</Text>
            </View>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor={"#ccd0d5"}
              onPress={onFocus}
              style={styles.searchIconBox}
            >
              <FontAwesome name="search" size={22} color="#000000" />
            </TouchableHighlight>
            <Animated.View
              style={[
                styles.inputBox,
                { transform: [{ translateX: inputBoxTraslateX }] },
              ]}
            >
              <Animated.View style={{ opacity: backButtonOpacity }}>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor={"#ccd0d5"}
                  onPress={onBlur}
                  style={styles.backIconBox}
                >
                  <MaterialIcons name="chevron-left" size={24} color="black" />
                </TouchableHighlight>
              </Animated.View>
              <TextInput
                style={styles.input}
                ref={inputRef}
                placeholder="Buscar"
                clearButtonMode="always"
                value={keyword}
                onChangeText={(text) => setkeyword(text)}
              />
            </Animated.View>
          </View>
        </View>
      </View>

      {/* CONTENIDO DE LA BUSQUEDA */}
      <Animated.View
        style={[
          styles.content,
          {
            opacity: contentOpacity,
            transform: [{ translateY: contentTraslateY }],
          },
        ]}
      >
        <>
          <View style={styles.separator} />
          {keyword === "" ? (
            <View style={styles.insertTextToSearchContainer}>
              <FontAwesome
                style={{ paddingBottom: 15 }}
                name="search"
                size={32}
                color="#ccc"
              />
              <Text>Ingresa el nombre de la ruta deseada</Text>
            </View>
          ) : (
            <ScrollView style={styles.scrollview}>
              <View style={styles.searchItem}>
                <FontAwesome
                  style={styles.itemIcon}
                  name="search"
                  size={16}
                  color="#ccc"
                />
                <Text> FAKE RESULT 1</Text>
              </View>
              <View style={styles.searchItem}>
                <FontAwesome
                  style={styles.itemIcon}
                  name="search"
                  size={16}
                  color="#ccc"
                />
                <Text> FAKE RESULT 2</Text>
              </View>
              <View style={styles.searchItem}>
                <FontAwesome
                  style={styles.itemIcon}
                  name="search"
                  size={16}
                  color="#ccc"
                />
                <Text> FAKE RESULT 3</Text>
              </View>
              <View style={styles.searchItem}>
                <FontAwesome
                  style={styles.itemIcon}
                  name="search"
                  size={16}
                  color="#ccc"
                />
                <Text> FAKE RESULT 4</Text>
              </View>
              <View style={styles.searchItem}>
                <FontAwesome
                  style={styles.itemIcon}
                  name="search"
                  size={16}
                  color="#ccc"
                />
                <Text> FAKE RESULT 5</Text>
              </View>
            </ScrollView>
          )}
        </>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: { zIndex: 1000, paddingTop: 35 },
  header: {
    height: 60,
    paddingHorizontal: 16,
    // backgroundColor: "red",
  },
  headerInner: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    // backgroundColor: "green",
  },
  searchIconBox: { padding: 10, borderRadius: 40 },
  backIconBox: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#ccc",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  inputBox: {
    height: 50,
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
    top: 0,
    left: 0,
    // backgroundColor: "white",
    width: width - 32,
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15,
    backgroundColor: "#ccc",
    alignItems: "center",
  },
  content: {
    width: width,
    height: height,
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundColor: "white",
    zIndex: 999,
  },
  separator: { height: 1, backgroundColor: "#ccc" },
  insertTextToSearchContainer: {
    // height: height,
    paddingTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  scrollview: {
    // height: height,
    backgroundColor: "white",
  },
  searchItem: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginLeft: 16,
  },
  itemIcon: {
    marginLeft: 15,
  },
});

export default screensHeader;
