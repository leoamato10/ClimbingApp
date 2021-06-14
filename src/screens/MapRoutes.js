import React from "react";
import { View } from "native-base";

import ScreenHeader from "../components/searchBar";
import Map from "../components/map";

const Home = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <ScreenHeader title="Cerca de mi" navigation={navigation} />
      <Map />
    </View>
  );
};

export default Home;
