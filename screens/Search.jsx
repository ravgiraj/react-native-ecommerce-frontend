import { View, TextInput, TouchableOpacity, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS } from "../constants";
import { useState } from "react";
import axios from "axios";
import { Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import SearchTile from "../components/products/SearchTile";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);

  // https://oceanic-furniture-production.up.railway.app/api/products/search

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "https://oceanic-furniture-production.up.railway.app/api/products/search/${searchKey}"
      );
      setSearchResults(response.data);
      // respose.data
    } catch (error) {
      console.log("failed to get product", error);
    }
  };
  console.log(searchKey);
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onprogress={() => handleSearch()}
          >
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View>
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
