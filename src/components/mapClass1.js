import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

import Carousel from "react-native-snap-carousel";

export default class CarouselMap extends Component {
  static navigationOptions = {
    title: "San Francisco",
  };

  state = {
    isMapReady: false,
    markers: [],
    initialPosition: {
      latitude: -32.9582254,
      longitude: -68.8930443,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    },
    coordinates: [
      {
        name: "Burger",
        latitude: 37.8025259,
        longitude: -122.4351431,
      },
      {
        name: "Pizza",
        latitude: 37.7946386,
        longitude: -122.421646,
      },
      {
        name: "Soup",
        latitude: 37.7665248,
        longitude: -122.4165628,
      },
      {
        name: "Sushi",
        latitude: 37.7834153,
        longitude: -122.4527787,
      },
      {
        name: "Curry",
        latitude: 37.7948105,
        longitude: -122.4596065,
      },
    ],
  };

  onMapLayout = () => {
    this.setState({ isMapReady: true });
  };

  onCarouselItemChange = (index) => {
    let location = this.state.coordinates[index];

    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    });

    this.state.markers[index].showCallout();
  };

  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    });

    this._carousel.snapToItem(index);
  };

  renderCarouselItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.name}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={(map) => (this._map = map)}
          showsUserLocation={true}
          style={styles.map}
          initialRegion={this.state.initialPosition}
          onLayout={this.onMapLayout}
        >
          {this.state.coordinates.map((marker, index) => (
            <Marker
              key={marker.name}
              ref={(ref) => (this.state.markers[index] = ref)}
              onPress={() => this.onMarkerPressed(marker, index)}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
            >
              <Callout>
                <Text>{marker.name}</Text>
              </Callout>
            </Marker>
          ))}
        </MapView>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={this.state.coordinates}
          containerCustomStyle={styles.carousel}
          renderItem={this.renderCarouselItem}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={300}
          removeClippedSubviews={false}
          onSnapToItem={(index) => this.onCarouselItemChange(index)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: 500,
    height: 800,
  },
  carousel: {
    position: "absolute",
    bottom: 0,
    marginBottom: 48,
  },
  cardContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: 200,
    width: 300,
    padding: 24,
    borderRadius: 24,
  },
  cardImage: {
    height: 120,
    width: 300,
    bottom: 0,
    position: "absolute",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  cardTitle: {
    color: "white",
    fontSize: 22,
    alignSelf: "center",
  },
});
