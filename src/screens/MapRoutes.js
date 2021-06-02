import React from "react";
import { Container, Content } from "native-base";

// import ScreenHeader from "../components/screensHeader";
import ScreenHeader from "../components/searchBar";
import Map from "../components/map";

const Home = ({ navigation }) => {
  return (
    <>
      <ScreenHeader title="Cerca de mi" navigation={navigation} />
      <Map />
    </>
  );
};

export default Home;
