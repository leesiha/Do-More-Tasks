import React, { useState, useEffect } from "react";
import { useCallback, useRef } from "react";
import { StyleSheet, View, Text, Button, Platform } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";

function Add() {
  const inputRef = useRef();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "Android");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <ScrollView vertical>
      <View style={styles.container}>
        <Text style={styles.title}>TASK</Text>
        <TextInput
          ref={inputRef}
          style={styles.detail}
          placeholder={"Write your task"}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>DUE BY</Text>
        <TouchableOpacity onPress={showDatepicker}>
          <Text style={styles.detail}>{date.toString()}</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>PEOPLE</Text>
        <TouchableOpacity>
          <Text style={styles.detail}>Tab to add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>LIST</Text>
        <TouchableOpacity>
          <Text style={styles.detail}>Honey Do</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>LOCATION</Text>
        <TouchableOpacity>
          <Text style={styles.detail}>Tab to add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>NOTES</Text>
        <TouchableOpacity>
          <Text style={styles.detail}>Tab to add</Text>
        </TouchableOpacity>
      </View>
      <Button title="Delete" />
      <Button title="Complete" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  detail: {
    color: "black",
    fontSize: 16,
    width: 200,
    borderColor: "#ccc",
    fontWeight: "bold",
  },
  title: {
    color: "grey",
    fontSize: 13,
    //paddingVertical: 5,
    fontWeight: "bold",
  },
});
export default Add;
