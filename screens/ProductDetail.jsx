import { View, Text } from "react-native";
import React from "react";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../constants";
import { Image } from "react-native";
import styles from "./productDetails.style";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
// import { Alert } from "react-native";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/images/fn1.jpg")}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 660.88</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}> (4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>

            <Text style={styles.ratingText}> {count} </Text>

            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWraper}>
          <Text style={styles.description}>Description </Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi hic
            rerum, laborum dolore excepturi vel quibusdam officia ipsa libero
            quia expedita consequatur alias perferendis facilis nihil. Odio
            similique recusandae architecto?
          </Text>
        </View>

        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text>Dallas</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text>Free Delivery</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cartRow}>
        <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
          <Text style={styles.cartTitle}> Buy NOw</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.addCart}>
          <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
