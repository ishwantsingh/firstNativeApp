import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import myPic from "./assets/1.jpg";

export default class App extends React.Component {
  state = {
    isShowingText: true,
    isShowingImage: false
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(previousState => ({
        isShowingText: !previousState.isShowingText,
        isShowingImage: !previousState.isShowingImage
      }));
    }, 700);
  }
  render() {
    if (!this.state.isShowingImage) {
      return (
        <View style={styles.container}>
          <Text style={{ top: 20, color: "white" }}>WASSUP DAWGGGG???</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image source={myPic} style={{ width: 280, height: 500 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    //color: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
