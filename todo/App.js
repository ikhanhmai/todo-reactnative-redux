/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Main from './App/components/index';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './App/store';
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={style.view}>
          <Main />
        </View>
      </Provider>
    );
  }
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
});

export default App;
