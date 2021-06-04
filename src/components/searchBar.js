import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Dimensions,
  TextInput,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import { searchRoutes } from "../Store/actions/routes";

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
  const dispatch = useDispatch();
  const routes = useSelector((state) => state.routes.routes);
  const searchedRoutes = useSelector((state) => state.routes.searchedRoutes);

  const showSearchResults = (text) => {
    setkeyword(text);
    const searchResult = routes.filter((route) => {
      return route.title.toLowerCase().includes(text.toLowerCase());
    });
    dispatch(searchRoutes(searchResult));
  };

  const makeSearch = () => {
    // const searchResult = routes.filter((route) => {
    //   return route.title.toLowerCase().includes(searchTerm.toLowerCase());
    // });

    dispatch(searchRoutes(searchResult));
  };

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
                onChangeText={(text) => showSearchResults(text)}
                onSubmitEditing={() => "makeSearch(keyword)"}
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
          <View style={{ height: 1, backgroundColor: "#ccc" }} />
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
            <View style={styles.scrollview}>
              <FlatList
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      style={styles.searchItem}
                      onPress={() =>
                        navigation.navigate("RouteDetail", { item })
                      }
                    >
                      <FontAwesome
                        style={styles.itemIcon}
                        name="search"
                        size={16}
                        color="#ccc"
                      />
                      <Text> {item.title}</Text>
                    </TouchableOpacity>
                  );
                }}
                data={searchedRoutes}
                keyExtractor={(item) => item.id}
              />
            </View>
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
    // width: width,
    // height: height,
    flex: 1,
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: 999,
  },
  insertTextToSearchContainer: {
    width: width,
    height: height,
    paddingTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  scrollview: {
    width: width,
    height: height,
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

{
  /* <ScrollView style={styles.scrollview}>
              <View style={styles.searchItem}>
                <FontAwesome
                  style={styles.itemIcon}
                  name="search"
                  size={16}
                  color="#ccc"
                />
                <Text> Fake result 1</Text>
              </View>
              <View style={styles.searchItem}>
                <FontAwesome
                  style={styles.itemIcon}
                  name="search"
                  size={16}
                  color="#ccc"
                />
                <Text> Fake result 2</Text>
              </View>
              <View style={styles.searchItem}>
                <FontAwesome
                  style={styles.itemIcon}
                  name="search"
                  size={16}
                  color="#ccc"
                />
                <Text> Fake result 3</Text>
              </View>
              <View style={styles.searchItem}>
                <FontAwesome
                  style={styles.itemIcon}
                  name="search"
                  size={16}
                  color="#ccc"
                />
                <Text> Fake result 4</Text>
              </View>
              <View style={styles.searchItem}>
                <FontAwesome
                  style={styles.itemIcon}
                  name="search"
                  size={16}
                  color="#ccc"
                />
                <Text> Fake result 5</Text>
              </View>
            </ScrollView> */
}
