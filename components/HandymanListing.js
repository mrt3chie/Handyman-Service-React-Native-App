import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import UserServiceScreenDetail from "../screens/subScreens/UserServiceScreenDetail";

const HandymanListing = ({ item, route }) => {

  const navigation = useNavigation();


  return (
    <View style={{ margin: 10 }}>
      <View style={{ flexDirection: "row"}}>
        <View>
          <ImageBackground
            imageStyle={{ borderRadius: 8 }}
            style={{ height: 170, aspectRatio: 4 / 6, }}
            source={{ uri: item.image }}
          >
          </ImageBackground>
        </View>

        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "700"}}>{item.name}</Text>
          <Text style={{ color:'gray', fontWeight:'400' }}>{item.location}</Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
          >
            <FontAwesome name="star" size={20} color="gold" />
            <Text style={{ marginLeft: 3, fontWeight:'800' }}>{item.rating}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight:'700', left:90 }}>{item.price}</Text>
          </View>
          <Pressable onPress={() => navigation.navigate('UserServiceScreenDetail')}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                padding: 10,
                width:120,
                textAlign:'center',
                borderRadius:22,
                left:65,
                top:10,
                backgroundColor: "black",
                color: "white",
              }}
            >
              Book
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HandymanListing;

const styles = StyleSheet.create({});
