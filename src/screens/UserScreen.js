import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import User from "../components/User";

export default function UserScreen({ user }) {
   
    
  return (
    <SafeAreaView styles={styles.wrapper}>
      <View style={styles.innerWrapper}>
        {user && (
          <User
            imageUrl={user.avatar_url}
            userName={user.login}
            bio={user.bio}
            followers={user.followers}
            following={user.following}
          />
        )}
        
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
  },
  innerWrapper: {
    padding: 20,
  },
});
