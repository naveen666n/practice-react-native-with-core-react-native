import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import LoginManager from './components/LoginManager';

function App(): React.JSX.Element {
  return (
    <View style={styles.body}>
      <LoginManager></LoginManager>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderBlockColor: 'blue',
    borderBottomWidth: 15,
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

export default App;
