import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { onPress } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

const Menu = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.menucontainer}>
      <TouchableOpacity style={styles.buttonStyle}
    onPress={() => navigation.navigate('HomeScreen')}>
    <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonStyle}
    onPress={() => navigation.navigate('ServiceScreen')}>
    <Text>Services</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonStyle}
    onPress={() => navigation.navigate('Bookings')}>
    <Text>Bookings</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonStyle}
    onPress={() => navigation.navigate('ProfileScreen')}>
    <Text>Profile</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    menucontainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderRadius:7,
        backgroundColor:'#FFFFEE',
        padding:10,
        paddingBottom:25,
    },
})