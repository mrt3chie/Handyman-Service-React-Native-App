import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", marginTop: 300}}
    >
      <Text style={{ fontSize: 45, fontWeight: "600" }}>Handy</Text>
      <Text style={{fontSize:22,marginLeft:0 }}>
        Making Your Life Easier
      </Text>
      <Pressable onPress={() => navigation.navigate("LoginScreen")}>
          <Text
            style={{
              width: 150,
              backgroundColor: "black",
              padding: 12,
              borderRadius: 7,
              marginTop: 40,
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

export default SplashScreen;

const styles = StyleSheet.create({});
