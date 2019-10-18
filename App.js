import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Image } from "react-native";
import myPic from "./assets/1.jpg";

export default class App extends React.Component {
  state = {
    isShowingText: true,
    isShowingImage: false,
    answer: ""
  };
  buttonClick = () => {
    alert("you liked the answer");
  };
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState(previousState => ({
  //       isShowingText: !previousState.isShowingText,
  //       isShowingImage: !previousState.isShowingImage
  //     }));
  //   }, 700);
  // }
  render() {
    // if (!this.state.isShowingImage) {
    return (
      <View style={styles.container1}>
        <Image source={myPic} style={styles.image1} />
        <Text style={styles.text1}>WASSUP DAWGGGG???</Text>
        <View style={styles.container2}>
          <Text style={styles.text1}>Write answer =></Text>
          <TextInput
            style={styles.input1}
            placeholder="tell us"
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
        </View>
        <Text style={styles.text2}>Answer => {this.state.answer}</Text>
        <Button onPress={this.buttonClick} title=" I like the answer" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  container2: {
    flex: 2,
    top: -80,
    backgroundColor: "black",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  text1: {
    color: "white",
    flex: 1
  },
  text2: {
    color: "white",
    top: -200,
    flex: 1,
    justifyContent: "flex-start"
  },
  image1: {
    flex: 4,
    resizeMode: "contain"
  },
  input1: {
    flex: 1,
    color: "black",
    backgroundColor: "white"
  }
});
