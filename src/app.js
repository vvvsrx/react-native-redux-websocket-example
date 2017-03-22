import React, { Component } from "react";
import { Provider } from "react-redux";
import NotifyApp from "./containers/NotifyApp";
import configureStore from "./store/configureStore";

const store = configureStore();
class MainScene extends Component {
  render() {
    return (
      <Provider store={store}>
          <NotifyApp />
      </Provider>
    );
  }
}

export default MainScene;
