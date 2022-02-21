import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, Text, View, ScrollView } from "react-native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { React, useEffect, useState } from "react";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const gap = 10;
const offset = 36;
const pageWidth = SCREEN_HEIGHT - (gap + offset) * 2;
const Todo = require("../../TODO.json"); //import json file

function Home({ navigation }) {
  const [task, setTask] = useState(Todo);
  const toggleTask = (item) => {
    if (item != undefined) {
      const tasks = Todo.title["Honey Do"].list.map((data, num) => {
        if (data.id == item) {
          data.detail.done = !data.detail.done;
        }
      });
      setTask(tasks);
    }
  };
  const addTask = () => navigation.navigate("Add");
  useEffect(() => {
    toggleTask();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.top}></View>
      <View style={styles.listDesign}>
        <Text style={styles.todoTitle}>Honey Do</Text>
        <ScrollView vertical>
          {Todo.title["Honey Do"].list.map((data, item) => (
            <View key={item} style={styles.todoDesign}>
              <Text
                style={{
                  ...styles.todoList,
                  textDecorationLine: data.detail.done
                    ? "line-through"
                    : "none",
                  color: data.detail.done ? "grey" : "black",
                }}
                onPress={() => {
                  toggleTask(item);
                }}
              >
                {data.detail.content}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.tab}>
        <MaterialCommunityIcons
          name="format-align-left"
          size={26}
          color="black"
        />
        <AntDesign
          name="pluscircle"
          size={50}
          color="black"
          onPress={addTask}
        ></AntDesign>
        <Ionicons name="ellipsis-horizontal-outline" size={26} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafbfc",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  top: {
    //flex: 1,
  },
  listDesign: {
    flex: 10,
    width: SCREEN_WIDTH,
    backgroundColor: "#fafbfc",
  },
  todoTitle: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 40,
  },
  todoDesign: {
    backgroundColor: "#ffffff",
    margin: 20,
    marginVertical: 3,
    padding: 20,
    borderRadius: 8,
  },
  todoList: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  tab: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: SCREEN_WIDTH,
  },
});
export default Home;
