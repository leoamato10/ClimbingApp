import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

const Cards = ({ item }) => {
  return (
    <View>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: item.imageUrl }} />
            <Body>
              <Text>{item.title}</Text>
              <Text note>GeekyAnts</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: item.imageUrl }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon
                type="MaterialCommunityIcons"
                name="trending-up"
                style={{ fontSize: 25 }}
              />
              <Text style={{ fontSize: 20 }}>{item.quantity}</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon
                type="MaterialCommunityIcons"
                name="map-marker-distance"
                style={{ fontSize: 25 }}
              />
              <Text style={{ fontSize: 20 }}>{item.kms}kms</Text>
            </Button>
          </Body>
          <Right>
            <Button transparent>
              <Icon
                type="MaterialCommunityIcons"
                name="download"
                style={{ fontSize: 25 }}
              />
            </Button>
          </Right>
        </CardItem>
      </Card>
    </View>
  );
};

export default Cards;
