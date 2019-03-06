import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { createStackNavigator } from "react-navigation";
import Login from './components/Login';
import Users from './components/Users';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootStack />
      </Provider>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Users: {
      screen: Users
    }
  }, 
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerTitle: 'Chat!'
    }
  }
);