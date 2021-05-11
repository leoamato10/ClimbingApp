import React, { useState, useEffect, useRef } from "react";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import * as Location from "expo-location";
import { useSelector } from "react-redux";
import Carousel from "react-native-snap-carousel";

import RoutesListCmp from "../components/routesListCmp";

const Map = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [markers, setMarkers] = useState([1]);
  const routes = useSelector((state) => state.routes.routes);
  const map = useRef();
  const callOutRef = useRef();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const onCarouselItemChange = (index) => {
    const location = routes[index];

    map.current.animateToRegion({
      latitude: location.location.latitude,
      longitude: location.location.longitude,
      latitudeDelta: 0.4,
      longitudeDelta: 0.055,
    });

    // callOutRef.current.markers[index].showCallout();
    // setMarkers(callOutRef.current);
    callOutRef.current.showCallout();
    console.log(markers);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={map}
        style={styles.mapStyle}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        mapType="hybrid"
        initialRegion={{
          latitude: -32.9382254,
          longitude: -68.8430443,
          latitudeDelta: 0.2,
          longitudeDelta: 0.095,
        }}
      >
        {routes.map((element, index) => {
          return (
            <Marker
              coordinate={routes[index].location}
              key={index}
              ref={callOutRef}
            >
              <Callout>
                <Text>{routes[index].title}</Text>
              </Callout>
            </Marker>
          );
        })}
      </MapView>

      <Carousel
        containerCustomStyle={styles.carousel}
        removeClippedSubviews={false}
        data={routes}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width - 50}
        onSnapToItem={(index) => onCarouselItemChange(index)}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardContainer}>
              <Text style={styles.cardText}>{item.title}</Text>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.cardImage}
                resizeMode="stretch"
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 55,
    backgroundColor: "red",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  carousel: {
    position: "absolute",
    bottom: 0,
    // marginBottom: 48,
  },
  cardContainer: {
    backgroundColor: "rgba(0,0,0,0.7)",
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width - 50,
    padding: 20,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
  },
  cardText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  cardImage: {
    width: Dimensions.get("window").width - 50,
    height: Dimensions.get("window").height / 6,
    position: "absolute",
    bottom: 0,
  },
});

export default Map;
