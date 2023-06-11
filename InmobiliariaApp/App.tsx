import React from 'react';
import {SafeAreaView} from 'react-native';
import HousesList from './components/HousesList';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <HousesList />
    </SafeAreaView>
  );
}
export default App;
