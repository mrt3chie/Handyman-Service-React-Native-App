import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const CardBookings = ({
  orderid,
  servicename,
  date,
  location,
  category,
  billamt,
  status,
}) => {
  return (
    <View style={{ margin: 10 }}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 7,
          padding:15
        }}
      >
        <View>
          <Text style={{ fontSize: 22, fontWeight: "700" }}>Order ID: {orderid}</Text>
          <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
            ServiceName: {servicename}
          </Text>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Category: {category}</Text>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Date: {date}</Text>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Location: {location}</Text>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Bill: Rs.{billamt}</Text>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Status: {status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CardBookings;
