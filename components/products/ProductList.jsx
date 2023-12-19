import { FlatList, Text, View } from "react-native";
import React from "react";
import useFetch from "../../hook/useFetch";
import { ActivityIndicator } from "react-native";
import styles from "./productlist.style";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";

const ProductList = () => {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductCardView item={item} />}
        contentContainerStyle={styles.container}
        ItemSeperatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ProductList;
