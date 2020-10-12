import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} >
      <Text>Open up App.js to start testing your app!</Text>
      <TouchableOpacity accessibilityLabel='testview'  style={{width:100,height:100,backgroundColor:'purple'}}  onPress={() => alert('Hello World')}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
