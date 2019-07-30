import React from 'react';

import { app, StyleSheet, Text, View, AsyncStorage } from 'react-native';

import { autoRehydrate, persistStore } from 'redux-persist'

import { Provider } from 'react-redux';

import configureStore from './configureStore'
import  AppIndex  from './appIndex'

const store = configureStore()


export class App extends React.Component {

  componentWillMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <AppIndex />
      </Provider>
    );
  }
}

export default App;
