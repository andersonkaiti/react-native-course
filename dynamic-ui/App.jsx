import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import CustomButton from "./components/custom-button/custom-button";

export default function App() {
  // const windowWidth = useWindowDimensions().width;
  // const windowHeight = useWindowDimensions().height;

  // const [dimensions, setDimensions] = useState({
  //   window: Dimensions.get("window"),
  // });

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener("change", ({ window }) => {
  //     setDimensions({ window });
  //   });

  //   return () => subscription?.remove();
  // });

  // const { window } = dimensions;
  // const windowWidth = window.width;
  // const windowHeight = window.height;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
          <CustomButton title="Press me" onPress={() => alert("Pressed!")} />
        </View>
      </View>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <View
    //     style={[
    //       styles.box,
    //       {
    //         width: windowWidth > 500 ? "70%" : "90%",
    //         height: windowHeight > 600 ? "60%" : "90%",
    //       },
    //     ]}
    //   >
    //     <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome!</Text>
    //   </View>
    // </View>
  );
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// console.log({ windowWidth, windowHeight });

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    // backgroundColor: "lightblue",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // fontSize: windowWidth > 500 ? 50 : 24,
    // fontSize: 24,
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "blue",
        fontSize: 30,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
