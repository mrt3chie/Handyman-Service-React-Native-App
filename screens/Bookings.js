import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import { firebase } from "../confignew";
import { async } from "@firebase/util";
import { doc, querySnapshot } from "firebase/firestore";
import CardBookings from "../components/CardBookings";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const Bookings = () => {
  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection("bookings");

  useEffect(() => {
    todoRef.onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const { OrderId } = doc.data();
        const { ServiceName } = doc.data();
        const { Location } = doc.data();
        const { Date } = doc.data();
        const { Category } = doc.data();
        const { BillAmt } = doc.data();
        const { Status } = doc.data();
        const { ImageField } = doc.data();
        users.push({
          id: doc.id,
          Category,
          Date,
          Location,
          OrderId,
          ServiceName,
          Status,
          BillAmt,
          ImageField,
        });
      });
      setUsers(users);
    });
  });

  return (
    <View style={{marginTop:25}}>
      <View>
        <Text style={{ fontSize: 22, fontWeight: "900", textAlign:'center', marginTop:25, marginBottom:10}}>My Bookings</Text>
      </View>
      <ScrollView style={{marginBottom:0}}>
        <FlatList
          data={users}
          numColumns={1}
          renderItem={({ item }) => (
            <Pressable>
              <CardBookings
                orderid={item.OrderId}
                servicename={item.ServiceName}
                category={item.Category}
                location={item.Location}
                date={item.Date}
                billamt={item.BillAmt}
                status={item.Status}
              />
            </Pressable>
          )}
        />
      </ScrollView>
      <View style={{marginTop:10}}>
        <Menu />
      </View>
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({});
