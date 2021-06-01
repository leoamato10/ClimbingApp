import React from "react";
import { Container, Content } from "native-base";

import ScreenHeader from "../components/screensHeader";
import Map from "../components/map";
import CarouselMap from "../components/mapClass1";

const Home = ({ navigation }) => {
  return (
    <Container style={{ flex: 1 }}>
      <ScreenHeader title="Cerca de mi" navigation={navigation} />
      <Content>
        <Map />
        {/* <CarouselMap /> */}
        {/* COMPONENT TO TEST CALLOUT FROM MARKERS */}
      </Content>
    </Container>
  );
};

export default Home;
