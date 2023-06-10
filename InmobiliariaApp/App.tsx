import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HousesList from './components/HousesList';

function App(): JSX.Element {
 

  return (
    <SafeAreaView>
      <HousesList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
