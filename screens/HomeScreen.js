import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import serviceimages from "../data/serviceimages";
import ProfileScreen from "./ProfileScreen";
import { TextInput } from "react-native";
import ServiceCategory from "../components/ServiceCategory";
import ImageSlider from "../components/ImageSlider";
import ServiceHorizontal from "../components/ServiceHorizontal";
import PopularServices from "../components/PopularServices";
import Menu from "../components/Menu";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{marginBottom:50}}>
      <ScrollView style={{ marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Welcome Back</Text>
          <Text style={{ fontSize: 13, marginLeft: 130 }}>Vellore, TN</Text>
        </View>

        {/*Search Bar*/}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#C0C0C0",
            margin: 10,
            padding: 10,
            borderRadius: 22,
          }}
        >
          <TextInput
            style={{ fontSize: 15 }}
            placeholder="Search for Service"
          />
          <AntDesign name="search1" size={24} color="#E52B50" />
        </View>

        {/*Image Slider*/}
        <ImageSlider />

        {/*Horizontal Slider*/}
        <ServiceHorizontal />

        {/*Popular Service*/}
        <PopularServices />
      </ScrollView>
      <View>
        <Menu />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
