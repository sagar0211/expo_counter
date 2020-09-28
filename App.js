/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

export default function App() {
  const [count, SetCount] = useState(0);
  const increment = () => {
    SetCount(count + 1);
  };
  const decrement = () => {
    SetCount(count - 1);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>
          Counter
        </Text>
        <Button
          style={styles.button}
          title="Increment button"
          onPress={increment}
        />
        <Text style={styles.show}>{count}</Text>
        <Button
          style={styles.button}
          title="Decrement button "
          onPress={decrement}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100vw',
    height: '10vh',
    padding: '5px',
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
  },
  show: {
    textAlign: 'center',
  },

});
