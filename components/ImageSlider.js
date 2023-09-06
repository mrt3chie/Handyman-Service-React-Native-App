import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'


const ImageSliderCard = () => {

    const images = [
        "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg",
        "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg",
        "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg",
    ];

    return (
    <View style={{marginTop:20}}>
     <SliderBox 
        images={images}
        autoPlay
        circleLoop
        dotColor = "#13274F"
        inactiveDotColor = "#90A4AE"
        ImageComponentStyle = {{
            borderRadius: 6,
            width: "94%"
        }}
     />
    </View>
  )
}

export default ImageSliderCard