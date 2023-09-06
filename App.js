import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StackNavigator from "./components/StackNavigator";
import HomeScreen from "./screens/HomeScreen";
import ServiceProviders from "./screens/ServiceProviders";
import ServiceScreen from "./screens/ServiceScreen";
import ServiceConfirmScreen from "./screens/subScreens/ServiceConfirmScreen";
import ServiceSelect from "./screens/subScreens/ServiceSelect";
import UserServiceScreenDetail from "./screens/subScreens/UserServiceScreenDetail";
import SplashScreen from "./screens/SplashScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Bookings from "./screens/Bookings";
import CardBookings from "./components/CardBookings";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="Splash">
          {(props) => <SplashScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name = "LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name = "RegisterScreen" component={RegisterScreen} options={{headerShown:false}}/>
          <Stack.Screen name = "HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name = "ServiceScreen" component={ServiceScreen} options={{headerShown:false}}/>
          <Stack.Screen name = "ServiceProviders" component={ServiceProviders} options={{headerShown:false}}/>
          <Stack.Screen name = "ServiceSelect" component={ServiceSelect} options={{headerShown:false}}/>
          <Stack.Screen name = "UserServiceScreenDetail" component={UserServiceScreenDetail} options={{headerShown:false}}/>
          <Stack.Screen name = "ProfileScreen" component={ProfileScreen} options={{headerShown:false}}/>
          <Stack.Screen name = "ServiceConfirmScreen" component={ServiceConfirmScreen} options={{headerShown:false}}/>
          <Stack.Screen name = "SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
          <Stack.Screen name = "Bookings" component={Bookings} options={{headerShown:false}}/>
          <Stack.Screen name = "CardBookings" component={CardBookings} options={{headerShown:false}}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
