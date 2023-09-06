import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ServiceConfirmScreen = ({route}) => {
  const navigation = useNavigation();
  return (
    <View style={{alignContent:'center', justifyContent:'center', alignItems:'center', marginTop: 50 }}>
      <View style={{ marginTop:110}}>
        <Ionicons name="checkmark-circle-sharp" size={100} color="black" />
      </View>
      <View style={{marginTop:10, alignItems:'center'}}>
        <Text style={{fontSize:32, fontWeight:'600'}}>Confirmed</Text>
        <Text style={{fontSize:16, marginTop:10,fontWeight:'500',textAlign:'center'}}>Booking ID: </Text>
        <Text style={{fontSize:16, marginTop:5,fontWeight:'400',textAlign:'center', color:'gray',marginLeft:20,marginRight:20}}>You will receive an SMS with additional details</Text>
      </View>
      <Pressable onPress={() => navigation.navigate('HomeScreen')}>
          <Text
            style={{
              width: 150,
              backgroundColor: "black",
              padding: 12,
              borderRadius: 7,
              marginTop: 35,
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
            }}
          >
            Continue
          </Text>
        </Pressable>
    </View>
  );
};

export default ServiceConfirmScreen;

const styles = StyleSheet.create({});
