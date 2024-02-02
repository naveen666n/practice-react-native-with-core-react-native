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
import Component1 from './Component1';
import Component2 from './Component2';

function Homepage(): React.JSX.Element {
  return (
    <View>
      <Component1></Component1>
      <Component2></Component2>
    </View>
  );
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

export default Homepage;
