import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ServiceListings = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={{ margin: 10 }}>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 2,
          borderRadius: 22,
          padding: 10,
        }}
      >
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              borderRadius: 7,
            }}
            source={{ uri: item.image }}
          />
        </View>

        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "700" }}>{item.name}</Text>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
            {item.type}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              bottom: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", left: 90 }}>
              Rs.{item.pricing}
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate('ServiceProviders', {
          })}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                padding: 10,
                width: 120,
                textAlign: "center",
                borderRadius: 22,
                left: 65,
                backgroundColor: "black",
                color: "white",
              }}
            >
              Select
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ServiceListings;

const styles = StyleSheet.create({});
