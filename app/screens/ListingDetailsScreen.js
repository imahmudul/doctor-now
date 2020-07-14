import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

import { Image } from 'react-native-expo-image-cache';
// import ContactSellerform from "../components/ContactSellerform";

function ListingDetailsScreen({ route }) {
  const lisiting = route.params;
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
        preview={{ uri: lisiting.images[0].thumbnailUrl }}
        uri={lisiting.images[0].url}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <Text style={lisiting.title}>Red jacket for sale</Text>
        <Text style={lisiting.price}>$100</Text>
        <View style={lisiting.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
        {/* <ContactSellerform lisiting={lisiting} /> */}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
