import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MessageScreen from './src/screens/MessageScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <MessageScreen />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default App;
