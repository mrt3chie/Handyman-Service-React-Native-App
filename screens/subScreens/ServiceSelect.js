import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import CleaningData from '../../data/CleaningData';
import ServiceListings from '../../components/ServiceListings';

const ServiceSelect = () => {
  const data = CleaningData;
  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: "900", textAlign:'center', marginTop:20, marginBottom:10}}>
            AC Services
          </Text>
    <ScrollView>
      <View>
        <View style={{ marginBottom:150}}>
          {data.map((item, index) => (
            <ServiceListings key={index} item={item} />
          ))}
        </View>
      </View>
    </ScrollView>
    </View>
  );
}

export default ServiceSelect

const styles = StyleSheet.create({})