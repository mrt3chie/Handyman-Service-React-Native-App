import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth ,db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  const register = () => {
    if (email === "" || password === "" || phone === "") {
      alert("Field is Empty");
    }
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log("User Crediantils", userCredential);
        const user = userCredential._tokenResponse.email;
        const myUserUid = auth.currentUser.uid;

        setDoc(doc(db, "users", `${myUserUid}`), {
          email: user,
          phone: phone,
        });
      }
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        padding: 10,
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ fontSize: 20, color: "#662d91", fontWeight: "bold" }}>
            Register
          </Text>
          <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
            Create a new account
          </Text>
        </View>

        {/*Email Field - Start*/}
        <View style={{ marginTop: 50 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor="black"
              style={{
                borderBottomWidth: 1,
                width: 300,
                fontSize: 16,
                marginLeft: 13,
                marginVertical: 10,
                borderBottomColor: "gray",
              }}
            />
          </View>
        </View>
        {/*Email Field - End*/}

        {/*Password Field - Start*/}
        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="key-outline" size={24} color="black" />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="black"
              style={{
                borderBottomWidth: 1,
                width: 300,
                fontSize: 16,
                marginLeft: 13,
                marginVertical: 10,
                borderBottomColor: "gray",
              }}
            />
          </View>
        </View>
        {/*Password Field - End*/}

        {/*Phone Number Field - Start*/}
        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="phone" size={24} color="black" />
            <TextInput
              placeholder="Phone Number"
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholderTextColor="black"
              style={{
                borderBottomWidth: 1,
                width: 300,
                fontSize: 16,
                marginLeft: 13,
                marginVertical: 10,
                borderBottomColor: "gray",
              }}
            />
          </View>
        </View>
        {/*Phone Number Field - End*/}

        {/*Register Button - Start*/}
        <Pressable onPress={register}>
          <Text
            style={{
              width: 200,
              backgroundColor: "#318CE7",
              padding: 15,
              borderRadius: 7,
              marginTop: 50,
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
            }}
          >
            Register
          </Text>
        </Pressable>
        {/*Register Button - End*/}

        <Pressable
          onPress={() => navigation.navigate("LoginScreen")}
          style={{ marginTop: 30 }}
        >
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              color: "gray",
              fontWeight: "500",
            }}
          >
            Already have an account? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
