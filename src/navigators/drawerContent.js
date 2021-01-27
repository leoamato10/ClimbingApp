import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Header,
  List,
  ListItem,
  Text,
  Left,
  Icon,
  Button,
  Body,
  Drawer,
  Thumbnail,
  Right,
} from "native-base";
import {
  // DrawerContentScrollView,
  // DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import Colors from "../shared/colors";

export function DrawerContent(props) {
  return (
    <Container style={{ flex: 1 }}>
      <Header transparent>
        <Left style={{ flex: 1 }}>
          <Button transparent>
            <Icon
              type="MaterialCommunityIcons"
              name="menu"
              style={{
                fontSize: 35,
                color: "black",
              }}
              onPress={() => props.navigation.toggleDrawer()}
            />
          </Button>
        </Left>
      </Header>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          {/* <DrawerContentScrollView {...props}> */}
          <View style={{ paddingBottom: 20, alignItems: "center" }}>
            <Thumbnail
              large
              style={{ marginHorizontal: 20 }}
              source={{
                uri:
                  "http://mendifilmfestival.com/MFF/images/2015/Invitados/DariusZaluski.jpg",
              }}
            />
            <Text>Ignacio Rodriguez</Text>
          </View>

          <DrawerItemList {...props} />
          {/* </DrawerContentScrollView> */}
        </View>
        <View>
          <List>
            <ListItem>
              <Body
                style={{
                  flexDirection: "row",
                  width: 100,
                  justifyContent: "space-evenly",
                }}
              >
                <Icon
                  type="MaterialCommunityIcons"
                  name="instagram"
                  style={{
                    fontSize: 25,
                    color: Colors.primary,
                  }}
                />
                <Icon
                  type="MaterialCommunityIcons"
                  name="facebook"
                  style={{
                    fontSize: 25,
                    color: Colors.primary,
                  }}
                />
                <Icon
                  type="MaterialCommunityIcons"
                  name="twitter"
                  style={{
                    fontSize: 25,
                    color: Colors.primary,
                  }}
                />
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon
                  type="AntDesign"
                  name="logout"
                  style={{
                    fontSize: 20,
                  }}
                />
              </Left>
              <Body>
                <Text>Salir</Text>
              </Body>
            </ListItem>
          </List>
        </View>
      </View>
    </Container>
  );
}
