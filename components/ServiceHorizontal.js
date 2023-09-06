import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ServiceHorizontal = () => {
  const serviceimagescard = [
    {
      id: "1",
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-hire-an-electrician.jpeg.jpg",
      name: "Electrician",
    },
    {
      id: "2",
      image: "https://www.neit.edu/wp-content/uploads/2022/11/Plumber-Water-Pipe-Leak-Repair.jpg",
      name: "Plumber",
    },
    {
      id: "3",
      image:
        "https://thepaintpeople.com/wp-content/uploads/2017/05/wallpainter.jpg",
      name: "Painting",
    },
    {
      id: "4",
      image:
        "https://ladyfair.in/wp-content/uploads/2021/06/salon-at-home-in-mohali.jpg",
      name: "Salon",
    },
    {
      id: "5",
      image:
        "https://nextdaycleaning.com/wp-content/uploads/2019/10/carpet-cleaning-hero-imageres2-1024x805.jpg",
      name: "Cleaning",
    },
  ];

  return (
    <View>
      <View style={{ marginTop: 20, margin:10 }}>
        <Text style={{fontSize:20, fontWeight:'700'}}>Home Services</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {serviceimagescard.map((item, index) => (
          <View style={{ margin: 10 }} key={index}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 90, height: 90, borderRadius: 30, resizeMode:'center' }}
            />
            <Text style={{ marginTop: 10, textAlign: "center" }}>
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ServiceHorizontal;
