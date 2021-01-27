import React from "react";
import {
  Container,
  Text,
  Icon,
  Header,
  Left,
  Card,
  CardItem,
  Button,
  Content,
  Body,
} from "native-base";
import * as Linking from "expo-linking";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import RoutesListCmp from "../components/routesListCmp";
import { TouchableOpacity } from "react-native-gesture-handler";

const Help = ({ navigation }) => {
  const routes = useSelector((state) => state.routes.routes);

  return (
    <Container style={styles.Container}>
      <Header transparent>
        <Left
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon
            type="MaterialCommunityIcons"
            name="menu"
            style={{
              fontSize: 35,
              color: "black",
            }}
            onPress={() => navigation.toggleDrawer()}
          />
          <Text style={{ fontSize: 20, paddingLeft: 15 }} numberOfLines={1}>
            Ayuda
          </Text>
        </Left>
      </Header>
      <Content style={{ padding: 10 }}>
        <Card>
          <CardItem>
            <Body>
              <Text>
                Podés solicitarnos ayuda, hacer sugerencias o simplemente
                contactarnos por acá:
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Icon
              type="MaterialCommunityIcons"
              name="whatsapp"
              style={{ fontSize: 25, color: "green" }}
            />
            <Text>+54 (9) 2615910502</Text>
            <Button
              transparent
              onPress={() => {
                Linking.openURL("https://wa.me/" + 5492615910501);
              }}
            >
              <Text>Ir a whatsapp</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default Help;

const styles = StyleSheet.create({
  Container: {
    // backgroundColor: "gray",
    // flex: 1,
  },
});
