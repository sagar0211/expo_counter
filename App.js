import React from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';

export default class App extends React.Component {
  state = {
    count : 0
  }
  increment =() => {
    this.setState({count: this.state.count + 1})
  }
  decrement =() => {
    this.setState({count: this.state.count - 1})
  }
render() {
  return (
    <View >
      <Text style={styles.header}>
        This is header
      </Text>
      <Button 
      title="Increment button"
      onPress={this.increment}
      />
      <Text style={styles.show} >{this.state.count}</Text>
      <Button 
      title="Decrement button "
      onPress={this.decrement} 
      /> 
    </View>
  );
}
}


const styles = StyleSheet.create({
  header: {
    width:'100vw',
    height:'10vh',
    textAlign:'center',
    backgroundColor: 'black',
    color:'white',
    fontSize: 30,
  }

});


 
