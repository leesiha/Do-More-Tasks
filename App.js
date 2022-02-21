import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, Text, View, ScrollView } from "react-native";
import "react-native-gesture-handler";
import { React, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/Screens/Home";
import Add from "./src/Screens/Add";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <Stack.Screen name="Todo-list" component={Home} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
