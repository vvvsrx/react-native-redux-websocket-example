import React, { Component } from "react";
import { View, Text, ListView, ScrollView,StyleSheet,Button } from "react-native";

class NotifyPage extends Component {
  render() {
      console.log(this.props);
    const {
      changeStatus,
      subscribeStatus,
      notify,
      statusType,
      statusMessage
    } = this.props;

    return (
      <View style={styles.container}>
        <Button onPress={changeStatus} title="下订单" color="#841584" />
        <Button onPress={subscribeStatus} title="开始接收消息" color="#841584" />
        <ScrollView>
          {notify.history.map((m,i) => {
            return <Text key={i}>{m}</Text>;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default NotifyPage;
