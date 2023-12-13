import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
  const slides = [
    require("../../assets/images/fn1.jpg"),
    require("../../assets/images/fn2.jpg"),
    require("../../assets/images/fn5.jpg"),
  ];
  return (
    <View style={styles.CarouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "92%",
          marginTop: 15,
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
