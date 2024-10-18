import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import PokemonCard from "./components/pokemon-card";
import {
  charmanderData,
  squirtleData,
  bulbasaurData,
  pikachuData,
} from "./assets/pokemon-data";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <PokemonCard {...charmanderData} />
          <PokemonCard {...squirtleData} />
          <PokemonCard {...bulbasaurData} />
          <PokemonCard {...pikachuData} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // paddingTop: StatusBar.currentHeight,
  },
});
