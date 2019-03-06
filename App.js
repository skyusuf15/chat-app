import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { createStackNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootStack />
      </Provider>
    );
  }
}

const RootStack = createStackNavigator({}, {});