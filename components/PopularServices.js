import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import popularServiceData from "../data/popularServiceData";

const PopularServices = () => {
  const data = popularServiceData;

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>Popular Services</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable onPress={() => navigation.navigate('')} style={{ margin: 10 }} key={index}>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={{ aspectRatio: 5 / 6, height: 170 }}
              source={{ uri: item.image }}
            >
              <Text
                style={{
                  position: "absolute",
                  top: 5,
                  left: 5,
                  fontSize: 14,
                  fontWeight: "900",
                  color: "white",
                  backgroundColor: "black",
                  padding: 10,
                  opacity: 0.7,
                  borderRadius: 7,
                }}
              >
                {item.offer} OFF
              </Text>
              <Text
                style={{
                  position: "absolute",
                  bottom: 5,
                  left: 0,
                  padding:10,
                  borderRadius:7,
                  fontSize: 14,
                  fontWeight: "500",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                {item.name}
              </Text>
            </ImageBackground>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default PopularServices;

const styles = StyleSheet.create({});
