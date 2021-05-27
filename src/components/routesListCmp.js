import React from "react";
import { View } from "native-base";
import { FlatList, TouchableOpacity } from "react-native";

import RouteItem from "./routeItemCmp";

const RoutesListCmp = (props) => {
  const renderRouteItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("routeDetail", { item })}
      >
        <RouteItem item={item} navigation={props.navigation} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={props.listData}
        showsVerticalScrollIndicator={false}
        renderItem={renderRouteItem}
      />
    </View>
  );
};

export default RoutesListCmp;
