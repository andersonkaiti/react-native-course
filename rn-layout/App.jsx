import { StyleSheet, View } from "react-native";
import Box from "./components/box";

export default function App() {
  return (
    // <View style={{ backgroundColor: "plum", flex: 1 }}></View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", top: 75, left: 75 }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156", position: "absolute", top: 100, left: 100 }}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    // width: 300,
    // height: 300,
    // flexWrap: "wrap",
    // alignContent: "space-evenly",
    // rowGap: 20,
    // columnGap: 30,
    // gap: 10,
  },
});
