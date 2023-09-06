import { StyleSheet, Text, View, Image, Touchable } from 'react-native'
import React from 'react'
import serviceimages from '../data/serviceimages'
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ServiceSelect from '../screens/subScreens/ServiceSelect';
import { SafeAreaView } from 'react-native-safe-area-context';


const ServiceCategory = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Pressable onPress={() => navigation.navigate('ServiceSelect')}>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.rowbox}>
                            <Image source={{ uri: serviceimages[0].image }} style={styles.img} />
                            <Text style={{ position: 'absolute', bottom: 30, left: 35, fontSize: 15, fontWeight: '500', color: 'white' }}>{serviceimages[0].name}</Text>
                        </View>
                        <View style={styles.rowbox}>
                            <Image source={{ uri: serviceimages[1].image }} style={styles.img} />
                            <Text style={{ position: 'absolute', bottom: 30, left: 35, fontSize: 15, fontWeight: '500', color: 'white' }}>{serviceimages[1].name}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.rowbox}>
                            <Image source={{ uri: serviceimages[2].image }} style={styles.img} />
                            <Text style={{ position: 'absolute', bottom: 30, left: 35, fontSize: 15, fontWeight: '500', color: 'white' }}>{serviceimages[2].name}</Text>
                        </View>
                        <View style={styles.rowbox}>
                            <Image source={{ uri: serviceimages[3].image }} style={styles.img} />
                            <Text style={{ position: 'absolute', bottom: 30, left: 35, fontSize: 15, fontWeight: '500', color: 'white' }}>{serviceimages[3].name}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.rowbox}>
                            <Image source={{ uri: serviceimages[4].image }} style={styles.img} />
                            <Text style={{ position: 'absolute', bottom: 30, left: 35, fontSize: 15, fontWeight: '500', color: 'white' }}>{serviceimages[4].name}</Text>
                        </View>
                        <View style={styles.rowbox}>
                            <Image source={{ uri: serviceimages[5].image }} style={styles.img} />
                            <Text style={{ position: 'absolute', bottom: 30, left: 35, fontSize: 15, fontWeight: '500', color: 'white' }}>{serviceimages[5].name}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.rowbox}>
                            <Image source={{ uri: serviceimages[6].image }} style={styles.img} />
                            <Text style={{ position: 'absolute', bottom: 30, left: 10, fontSize: 15, fontWeight: '500', color: 'white' }}>{serviceimages[6].name}</Text>
                        </View>
                        <View style={styles.rowbox}>
                            <Image source={{ uri: serviceimages[7].image }} style={styles.img} />
                            <Text style={{ position: 'absolute', bottom: 30, left: 35, fontSize: 15, fontWeight: '500', color: 'white' }}>{serviceimages[7].name}</Text>
                        </View>
                    </View>

                </View>
            </Pressable>

        </View>
    )
}

export default ServiceCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        flex: 1,
        marginTop: 5,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    img: {
        backgroundColor: 'black',
        opacity: 0.5,
        height: 163,
        width: 163,
        flex: 1,
        aspectRatio: 1,
        marginHorizontal: 5,
        borderRadius: 15
    },
});