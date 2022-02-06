import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, Text, View, ScrollView } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const gap = 10;
const offset = 36;
const pageWidth = SCREEN_HEIGHT - (gap + offset) * 2;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.top}></View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        contentContainerStyle={styles.scrollView}
        decelerationRate="fast"
      >
        <View style={styles.listDesign}>
          <Text style={styles.todoTitle}>Honey Do</Text>
          <ScrollView vertical>
            <View style={styles.todoDesign}>
              <Text style={styles.todoList}>Pickup Cleaners</Text>
            </View>
            <View style={styles.todoDesign}>
              <Text style={styles.todoList}>Mow Lawn</Text>
            </View>
            <View style={styles.todoDesign}>
              <Text style={styles.todoList}>Garage Shelves</Text>
            </View>
            <View style={styles.todoDesign}>
              <Text style={styles.todoList}>Install Roman Shades</Text>
            </View>
            <View style={styles.todoDesign}>
              <Text style={styles.todoList}>Mulch Flower Beds</Text>
            </View>
            <View style={styles.todoDesign}>
              <Text style={styles.todoList}>Build Crib</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.listDesign}>
          <Text style={styles.todoTitle}>Honey Do</Text>
          <View style={styles.todoDesign}>
            <Text style={styles.todoList}>Pickup Cleaners</Text>
          </View>
          <View style={styles.todoDesign}>
            <Text style={styles.todoList}>Mow Lawn</Text>
          </View>
          <View style={styles.todoDesign}>
            <Text style={styles.todoList}>Garage Shelves</Text>
          </View>
          <View style={styles.todoDesign}>
            <Text style={styles.todoList}>Install Roman Shades</Text>
          </View>
          <View style={styles.todoDesign}>
            <Text style={styles.todoList}>Mulch Flower Beds</Text>
          </View>
          <View style={styles.todoDesign}>
            <Text style={styles.todoList}>Build Crib</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.tab}>
        <AntDesign name="user" size={26} color="black" />
        <AntDesign name="pluscircle" size={50} color="black" />
        <FontAwesome name="moon-o" size={26} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f5f6",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  top: {
    backgroundColor: "#eff0f4",
    flex: 1,
  },
  scrollView: { paddingHorizontal: offset + gap / 2 },
  listDesign: {
    width: SCREEN_WIDTH / 1.3,
    height: SCREEN_HEIGHT / 1.3,
    backgroundColor: "#f8fbfc",
    borderRadius: 13,
    marginHorizontal: gap,
    paddingBottom: 10,
  },
  todoTitle: {
    color: "black",
    fontSize: 23,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 40,
  },
  todoDesign: {
    backgroundColor: "white",
    marginHorizontal: 18,
    marginVertical: 3,
    padding: 13,
  },
  todoList: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  tab: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: SCREEN_WIDTH / 1.3,
  },
});
