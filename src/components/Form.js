import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from "react-native";

export default function Form({ setUser, setRepos }) {
  const [isLoading, setIsLoding] = useState(false);
  const [input, setInput] = useState("");

  const fetchUserData = async () => {
    setIsLoding(true);
    try {
      const userResponse = await fetch(`https://api.github.com/users/${input}`);
      const user = await userResponse.json();
      const reposeREsponse = await fetch(
        `https://api.github.com/users/${input}/repos`
      );
      const repos = await reposeREsponse.json();
      setRepos(repos);

      console.log(repos);
      setUser(user);
      setIsLoding(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, []);
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter Your User Name"
        onChangeText={(val) => setInput(val)}
        value={input}
      />
      <View style={styles.button}>
        <Button
          title="search"
          onPress={() => {
            if (input) {
              fetchUserData();
            }
          }}
        />
      </View>

      {isLoading ? <ActivityIndicator /> : null}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#bbbb",
    borderRadius: 20,
    padding: 10,
    marginTop: 50,
  },
  button: {
    margin: 10,
  },
});
