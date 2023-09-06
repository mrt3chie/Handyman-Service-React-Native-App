import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(()=>{
    const unSubscribe = auth.onAuthStateChanged((authUser)=>{
        if(authUser){
            navigation.navigate("HomeScreen");
        }
    });

    return unSubscribe;

  },[])

  const login = () => {
    if (email === "" || password === "") {
      alert("Email or Password Field is Empty");
    }else {
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log("User Credential",userCredential);
        const user = userCredential.user;
        console.log("User Details", user)
        navigation.navigate("HomeScreen")
    })
    }
  }

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
        <View style={styles.InputContainer}>
          <Text style={styles.labelTop}>Login</Text>
          <Text style={styles.subLabelTop}>Sign to your account</Text>
        </View>
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
              style={styles.inputField}
            />
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="key-outline" size={24} color="black" />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholderTextColor="black"
              style={styles.inputField}
            />
          </View>

          <Pressable onPress={login}>
            <Text style={styles.btnLogin}>Login</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("RegisterScreen")} style={{ marginTop: 30 }}>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                color: "gray",
                fontWeight: "500",
              }}
            >
              Don't have an account? Signup
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  InputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  labelTop: {
    fontSize: 20,
    color: "#662d91",
    fontWeight: "bold",
  },
  subLabelTop: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: "600",
  },
  inputField: {
    borderBottomWidth: 1,
    fontSize: 16,
    marginLeft: 13,
    borderBottomColor: "gray",
    marginVertical: 10,
    width: 300,
  },
  btnLogin: {
    width: 200,
    backgroundColor: "#318CE7",
    padding: 15,
    borderRadius: 7,
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign:'center',
    color:'white'
  },
});
