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
          <Text style={styles.text1}>WASSUP DAWGGGG???</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image source={myPic} style={styles.image1} />
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
  },
  text1: {
    top: 20,
    color: "white"
  },
  image1: {
    width: 280,
    height: 500
  }
});
