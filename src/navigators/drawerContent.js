import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  List,
  ListItem,
  Text,
  Left,
  Icon,
  Button,
  Body,
  Thumbnail,
} from "native-base";
import { DrawerItemList } from "@react-navigation/drawer";

import { useDispatch, useSelector } from "react-redux";

import Colors from "../shared/colors";
import { userLogout } from "../Store/actions/auth";

export function DrawerContent(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

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
                uri: "http://mendifilmfestival.com/MFF/images/2015/Invitados/DariusZaluski.jpg",
              }}
            />
            <Text>Ignacio Rodriguez</Text>
          </View>

          <DrawerItemList {...props} />
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
            <ListItem icon onPress={() => dispatch(userLogout())}>
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
