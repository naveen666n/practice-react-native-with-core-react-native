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

function Component1(): React.JSX.Element {
  let itemsArr = [];

  console.log(itemsArr);
  return (
    <View>
      <Text>Component2</Text>
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

export default Component1;
