import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../constants";
import { Image } from "react-native";
import styles from "./productDetails.style";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const ProductDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // Alert.alert("bhakk bosdike");
          }}
        >
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/images/fn1.jpg")}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}></View>
      </View>
    </View>
  );
};

export default ProductDetails;
