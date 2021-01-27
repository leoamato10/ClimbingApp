import React, { Component, useEffect } from "react";
import { Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
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

import { toggleDownloaded } from "../Store/actions/routes";

const RouteItem = ({ item, navigation }) => {
  const dispatch = useDispatch();

  const currentRouteIsDownloaded = useSelector((state) =>
    state.routes.downloadedRoutes.some((route) => item.id === route.id)
  );

  const toggleDownloadedHandler = (id) => {
    dispatch(toggleDownloaded(id));
  };

  // useEffect(() => {
  //   navigation.setParams({ isDownloaded: currentRouteIsDownloaded });
  // }, [currentRouteIsDownloaded]);

  return (
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
          {currentRouteIsDownloaded ? (
            <Button transparent>
              <Icon
                type="MaterialCommunityIcons"
                name="check"
                style={{ fontSize: 25 }}
                onPress={() => toggleDownloadedHandler(item.id)}
              />
            </Button>
          ) : (
            <Button transparent>
              <Icon
                type="MaterialCommunityIcons"
                name="download"
                style={{ fontSize: 25 }}
                onPress={() => toggleDownloadedHandler(item.id)}
              />
            </Button>
          )}
        </Right>
      </CardItem>
    </Card>
  );
};

export default RouteItem;
