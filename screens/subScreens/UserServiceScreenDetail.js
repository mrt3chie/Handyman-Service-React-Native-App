import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ServiceConfirmScreen from "./ServiceConfirmScreen";

const UserServiceScreenDetail = ({ route }) => {
  const navigation = useNavigation();

  const [addDate, setAddDate] = useState("");
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Pincode, setPincode] = useState("");
  const [City, setCity] = useState("");

  // const orderid = require("order-id")("key");
  // const id = orderid.generate();

  // orderid.getTime(id);

  //Place Order
  const addTodo = () => {
    //check if we have any todo
    if (Address && setAddress.length > 0) {
      //get TimeStamp
      const data = {
        OrderId:"15476",
        BillAmt:'1250',
        Date:setAddDate,
        ServiceName: 'AC Service',
        Location:setCity,
        Category: 'AC',
        Status: 'In-Progress'
      };
      todoRef
        .add(data)
        .then(() => {
          navigation.navigate('ServiceConfirmScreen')
          //release Keyboard
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "900",
          textAlign: "center",
          marginTop: 30,
          marginBottom: 10,
        }}
      >
        Order Details
      </Text>
      <ScrollView style={{ margin: 30 }}>
        <View style={{ borderWidth: 2, padding: 10, borderRadius: 7 }}>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>AC Service</Text>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
          Ram Kumar
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
            AC
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
            Rs.250
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
            Total Payable: Rs.950
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <TextInput
            placeholder="Date"
            value={setAddDate}
            onChangeText={(Date) => setAddDate(Date)}
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 7,
              marginBottom: 15,
            }}
          />
          <TextInput
            placeholder="Name"
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 7,
              marginBottom: 15,
            }}
          />
          <TextInput
            placeholder="Address"
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 7,
              marginBottom: 15,
            }}
          />
          <TextInput
            placeholder="City"
            value={setCity}
            onChangeText={(Location) => setCity(Location)}
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 7,
              marginBottom: 15,
            }}
          />
          <TextInput
            placeholder="Pincode"
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 7,
              marginBottom: 15,
            }}
          />
          <Pressable onPress={() => navigation.navigate('ServiceConfirmScreen')} style={{ alignItems: "center", margin: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                padding: 15,
                width: 180,
                textAlign: "center",
                borderRadius: 7,
                backgroundColor: "black",
                color: "white",
              }}
            >
              Place Order
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserServiceScreenDetail;

const styles = StyleSheet.create({});
