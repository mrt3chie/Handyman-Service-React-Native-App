import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HandymanListing from "../components/HandymanListing";
import handymanData from "../data/handymanData";
import { ScrollView } from "react-native-gesture-handler";

const MyBookingScreen = () => {
  const data = handymanData;
  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: "900", textAlign:'center', marginTop:40, marginBottom:10}}>
            Service Providers
          </Text>
    <ScrollView>
      <View>
        <View style={{ marginBottom:150}}>
          {data.map((item, index) => (
            <HandymanListing key={index} item={item} />
          ))}
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

export default MyBookingScreen;

const styles = StyleSheet.create({});
