import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Form from "../components/Form";
import ReposList from "../components/ReposList";
import User from "../components/User";

export default function Home() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  return (
    <SafeAreaView styles={styles.wrapper}>
        <View style={styles.innerWrapper}>
      <Form setUser={setUser} setRepos={setRepos} />
      {user && (
        <User
          imageUrl={user.avatar_url}
          userName={user.login}
          bio={user.bio}
          followers={user.followers}
          following={user.following}
        />
      )}
      <ReposList repos={repos} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
},
innerWrapper:{
      padding:20

  }
});
