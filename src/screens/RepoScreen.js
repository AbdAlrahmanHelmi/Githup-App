import React from "react";
import { Text, View } from "react-native";
import Repo from "../components/Repo";

export default function RepoScreen({ item }) {
  return (
    <View>
      <Repo item={item} />
      <Text>othor stuff</Text>
    </View>
  );
}
