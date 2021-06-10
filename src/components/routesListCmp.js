import React from "react";
import { View } from "native-base";
import { FlatList, TouchableOpacity } from "react-native";

import RouteItem from "./routeItemCmp";

const RoutesListCmp = ({ routes, navigation }) => {
  const renderRouteItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("RouteDetail", { item })}
      >
        <RouteItem item={item} navigation={navigation} />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "white",
        // position: "absolute",
        // left: 0,
        // top: 90,
        // width: "100%",
      }}
    >
      <FlatList
        data={routes}
        showsVerticalScrollIndicator={false}
        renderItem={renderRouteItem}
      />
    </View>
  );
};

export default RoutesListCmp;
