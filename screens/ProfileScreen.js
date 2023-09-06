import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Image } from 'react-native'
import React from 'react'

import { useNavigation } from "@react-navigation/native";
import Menu from '../components/Menu';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop:50,marginBottom:80}}>
      <View style={{ marginTop: 10 }}>
        <View style={{ alignContent: "center", justifyContent: "center" }}>
          <Text
            style={{ textAlign: "center", fontSize: 26, fontWeight: "600" }}
          >
           Profile
          </Text>
        </View>
        <View style={{ marginTop: 0 }}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="gray"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              width: 300,
              marginTop: 30,
              marginLeft:30,
              height: 56,
              padding: 20,
              fontSize: 13,
              borderColor: "gray",
            }}
          />
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="gray"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              width: 300,
              marginTop:20,
              marginLeft:30,
              height: 56,
              padding: 20,
              fontSize: 13,
              borderColor: "gray",
            }}
          />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="gray"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              width: 300,
              marginTop:20,
              marginLeft:30,
              height: 56,
              padding: 20,
              fontSize: 13,
              borderColor: "gray",
            }}
          />
          <TextInput
            placeholder="Address"
            placeholderTextColor="gray"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              width: 300,
              marginTop:20,
              marginLeft:30,
              height: 56,
              padding: 20,
              fontSize: 13,
              borderColor: "gray",
            }}
          />
          <TextInput
            placeholder="State"
            placeholderTextColor="gray"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              width: 300,
              marginTop:20,
              marginLeft:30,
              height: 56,
              padding: 20,
              fontSize: 13,
              borderColor: "gray",
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="Pincode"
              placeholderTextColor="gray"
              style={{
                borderWidth: 1,
                borderRadius: 7,
                width: 130,
                marginTop:20,
                marginLeft: 30,
                height: 56,
                padding: 20,
                fontSize: 13,
                borderColor: "gray",
              }}
            />
            <TextInput
              placeholder="City"
              placeholderTextColor="gray"
              style={{
                borderWidth: 1,
                borderRadius: 7,
                width: 150,
                marginTop:20,
                marginLeft: 20,
                height: 56,
                padding: 20,
                fontSize: 13,
                borderColor: "gray",
              }}
            />
          </View>
        </View>
        <Pressable>
          <Text
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 18,
              borderRadius: 7,
              marginTop: 15,
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
            }}
          >
            Edit Profile
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('LoginScreen')}>
          <Text
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 18,
              borderRadius: 7,
              marginTop: 10,
              marginBottom:10,
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
            }}
          >
            Log Out
          </Text>
        </Pressable>
      </View>
      <View>
        <Menu />
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})