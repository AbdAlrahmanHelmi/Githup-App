import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function User({
  userName,
  bio,
  followers,
  following,
  imageUrl,
}) {
  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View>
        <Text style={styles.userNameText}>{userName}</Text>
        <Text>{bio}</Text>
        <Text>followers:{followers}</Text>
        <Text>following:{following}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#bbbb",
    borderRadius: 20,
    padding: 10,
  },
  userNameText: {
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
    marginEnd: 10,
  },
});
