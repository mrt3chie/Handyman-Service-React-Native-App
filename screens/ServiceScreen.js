import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ServiceCategory from "../components/ServiceCategory";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import Menu from "../components/Menu";

const ServiceScreen = () => {
  return (
    <View style={{ marginTop: 20, marginBottom: 50 }}>
      <ScrollView>
        <View
          style={{
            marginTop: 50,
            alignContent: "center",
            alignItems: "center",
            bottom: 25,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "600" }}>Services</Text>
        </View>
        <ServiceCategory />
      </ScrollView>
      <View>
        <Menu />
      </View>
    </View>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({});
