import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import Repo from "./Repo";

export default function ReposList({ repos }) {
  return (
    <View>
      {repos.length > 0 && (
        <Text style={styles.RepositoriesText}>Repositories</Text>
      )}
      <FlatList
        data={repos}
        renderItem={({ item, index }) => {
          return <Repo item={item} />;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  RepositoriesText: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
  },
});
