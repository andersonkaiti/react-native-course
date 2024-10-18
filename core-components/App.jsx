import { View, Alert, Button } from "react-native";
import Greet from "./components/greet";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Greet name="Bruce Wayne" />
      <Greet name="Clark Kent" />

      {/* <Button title="Alert" onPress={() => Alert.alert("Invalid data!")} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Invalid data!", "DOB incorrect")}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Invalid data!", "DOB incorrect", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel pressed"),
            },
            {
              text: "OK",
              onPress: () => console.log("OK pressed"),
            },
          ])
        }
      /> */}

      {/* <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator size="large" color="midnightblue" animating={false} /> */}

      {/* <StatusBar
        // Não muda no iOS
        backgroundColor="lightgreen"
        barStyle="dark-content"
        // hidden
      /> */}

      {/* <Button
        title="Press"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
        // disabled
      />

      <Modal
        visible={isModalVisible}
        // É chamado quando o usuário clica no botão de voltar no Android
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        // Essa prop afeta apenas o iOS
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal> */}

      {/* <Pressable onPress={() => console.log("Image pressed")}>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable onPress={() => console.log("Text pressed")}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          ducimus inventore fugiat aliquid vel vero dicta sit. Iure quas
          suscipit dignissimos, vero sit quos temporibus iusto, dolorem
          voluptates odio aperiam? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsum iste consectetur libero deleniti! Ut
          exercitationem error ipsam ex, enim amet, minima sequi fugiat deserunt
          sunt earum eligendi dignissimos cupiditate. Libero! Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Inventore dolor vero ullam a
          animi illum provident. Est atque, quas itaque, molestias ut cupiditate
          perferendis unde quod officiis delectus natus voluptate!
        </Text>
      </Pressable> */}

      {/* <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          ducimus inventore fugiat aliquid vel vero dicta sit. Iure quas
          suscipit dignissimos, vero sit quos temporibus iusto, dolorem
          voluptates odio aperiam? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsum iste consectetur libero deleniti! Ut
          exercitationem error ipsam ex, enim amet, minima sequi fugiat deserunt
          sunt earum eligendi dignissimos cupiditate. Libero! Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Inventore dolor vero ullam a
          animi illum provident. Est atque, quas itaque, molestias ut cupiditate
          perferendis unde quod officiis delectus natus voluptate!
        </Text>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView> */}

      {/* <ImageBackground style={{ flex: 1 }} source={logoImg}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground> */}
      {/* <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      /> */}

      {/* <Text>
        <Text style={{ color: "white" }}>Hello</Text>, World!
      </Text> */}

      {/* <View
        style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
      ></View>
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
      ></View> */}
    </View>
  );
}
