import { StyleSheet, Text, View, Button } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// Também é possível extrair a prop HomeScreen({ navigation }) do componente
export default function HomeScreen({ navigation, route }) {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>{route.params?.result}</Text>
      <Button
        title="Go to about"
        onPress={() =>
          navigation.navigate(
            "About",
            {
              name: "Anderson",
            }
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
