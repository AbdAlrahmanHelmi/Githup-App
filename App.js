import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import UserScreen from "./src/screens/UserScreen";
import RepoScreen from "./src/screens/RepoScreen";

const HomeStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="User" component={UserScreen} />
        <HomeStack.Screen name="Repo" component={RepoScreen} />

      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
