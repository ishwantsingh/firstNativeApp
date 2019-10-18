import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  ScrollView
} from "react-native";
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
      <ScrollView style={styles.container0} horizontal pagingEnabled>
        <View style={styles.container1}>
          <Image source={myPic} style={styles.image1} />
          <Text style={styles.text1}>WASSUP DAWGGGG???</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text1}>Write answer =></Text>
          <TextInput
            style={styles.input1}
            placeholder="tell us"
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
        </View>
        <View style={styles.container1}>
          <Text style={styles.text2}>Answer => {this.state.answer}</Text>
        </View>
        <View style={styles.container2}>
          <Button
            onPress={this.buttonClick}
            title=" I like the answer"
            style={styles.button1}
          />
          <TouchableHighlight onPress={this.buttonClick} underlayColor="white">
            <View style={styles.container3}>
              <Text style={styles.text1}>TouchableHighlight- but-2</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    backgroundColor: "black"
  },
  container1: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
    flexShrink: 0.5,
    top: 100
  },
  container2: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "black"
  },
  text1: {
    textAlign: "center",
    color: "white",
    flex: 1
  },
  text2: {
    color: "white",
    flex: 1,
    justifyContent: "flex-start"
  },
  image1: {
    flex: 1,
    width: "80%",
    resizeMode: "contain"
  },
  input1: {
    flex: 1,
    color: "black",
    backgroundColor: "white"
  },
  button1: {
    top: 0
  },
  container3: {
    marginLeft: 30,
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
    height: 30
  }
});
