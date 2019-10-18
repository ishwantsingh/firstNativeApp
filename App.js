import React from "react";
import {
  FlatList,
  ActivityIndicator,
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
    isLoading: true,
    answer: ""
  };
  buttonClick = () => {
    alert("you liked the answer");
  };
  componentDidMount() {
    //   setInterval(() => {
    //     this.setState(previousState => ({
    //       isShowingText: !previousState.isShowingText,
    //       isShowingImage: !previousState.isShowingImage
    //     }));
    //   }, 700);

    return fetch("https://facebook.github.io/react-native/movies.json")
      .then(res => res.json())
      .then(data => {
        this.setState({ isLoading: false, movieList: data.movies });
      })
      .catch(err => console.log(err));
  }
  render() {
    // if (!this.state.isShowingImage) {
    return (
      // <ScrollView style={styles.container0} horizontal pagingEnabled>
      <View style={styles.container0}>
        <Image source={myPic} style={styles.image1} />
        <View style={styles.container2}>
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
        {this.state.isLoading ? (
          <View style={{ flex: 1, padding: 20 }}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={styles.container1}>
            <FlatList
              data={this.state.movieList}
              renderItem={({ item }) => (
                <Text style={styles.text1}>
                  {item.title}, {item.releaseYear}
                </Text>
              )}
              keyExtractor={({ id }, index) => id}
            />
          </View>
        )}
      </View>
      /* </ScrollView> */
    );
  }
}

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white"
  },
  container1: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "white"
  },
  container2: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white"
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
    flex: 4,
    width: "80%",
    resizeMode: "contain"
    //  top: 200
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
