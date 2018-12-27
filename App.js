import React, {Component} from 'react';
import Header from "./src/components/header"
import Post from "./src/components/post"
import {View, Text} from "react-native"

export default class App extends Component {
  render() {

    const comments = [{
      nickname: "Luciana Bahia",
      comment: "Top !!!"
    }, {
      nickname: "Lucas Souza",
      comment: "Feio ahuuha ua huhauh aua"
    }]

    return (
      <View style={{flex:1}}>
          <Header></Header>
          <Post comments={comments} 
            image={require("./assets/imgs/fence.jpg")}>
          </Post>
      </View>
    )
  }
}
