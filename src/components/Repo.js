import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Repo({ item }) {
  return (
    <View style={styles.repos}>
      <Text style={styles.repoNameText}>{item.name}</Text>
      <Text style={styles.language}>
        Language:{item.language || "No Language"}
      </Text>
      <Text>Forks:{item.forks_count}</Text>
      <Text>Open issues:{item.open_issues_count}</Text>
      <View style={styles.line} />
    </View>
  );
}
const styles = StyleSheet.create({
  repos: {
    marginTop: 10,
  },
  repoNameText: {
    fontWeight: "bold",
  },
  language: {
    color: "blue",
    fontWeight: "700",
  },
  line: {
    height: 1,
    backgroundColor: "#bbb",
  },
});
