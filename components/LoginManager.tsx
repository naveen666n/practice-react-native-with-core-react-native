import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Homepage from './Homepage';
import LoginPage from './LoginPage';

function LoginManager(): React.JSX.Element {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return isLoggedIn ? <Homepage></Homepage> : <LoginPage></LoginPage>;
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00ffff',
  },
  item: {
    margin: 10,
    justifyContent: 'center',
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default LoginManager;
