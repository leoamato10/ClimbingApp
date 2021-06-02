import React, { useState, useRef } from "react";
import { Right, Icon, Header, Left, Text } from "native-base";
import { StyleSheet, Dimensions, TextInput } from "react-native";
import Animated, { Easing } from "react-native-reanimated";

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
  const input = useRef();

  const onFocus = () => {
    setisFocused(true);
    const inputBoxTraslateXconfig = {
      duration: 200,
      toValue: 1,
      easing: Easing.ease,
    };
    timing(inputBoxTraslateX, inputBoxTraslateXconfig).start();
  };

  return (
    <Header transparent>
      <Left style={styles.headerLeft}>
        <Icon
          type="MaterialCommunityIcons"
          name="menu"
          style={{ fontSize: 35, color: "black" }}
          onPress={() => navigation.toggleDrawer()}
        />
        <Text style={{ fontSize: 20, paddingLeft: 15 }} numberOfLines={1}>
          {title}
        </Text>
      </Left>

      <Right>
        <Icon
          type="MaterialIcons"
          name="search"
          style={{ fontSize: 30, color: "black" }}
          onPress={() => onFocus()}
        />
        <Animated.View
          style={[
            styles.inputBox,
            { transform: [{ translateX: inputBoxTraslateX }] },
          ]}
        >
          <TextInput
            style={styles.input}
            ref={input}
            placeholder="Search"
            clearButtonMode="always"
            value={keyword}
            onChangeText={(text) => setkeyword(text)}
          />
        </Animated.View>
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
  headerLeft: {
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    position: "relative",
    backgroundColor: "gray",
  },
  inputBox: {
    height: 50,
    flexDirection: "row",
    // alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    width: width - 32,
    // backgroundColor: "green",
  },
  input: {
    flex: 1,
    height: "100%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 16,
    fontSize: 18,
  },
});

export default screensHeader;
