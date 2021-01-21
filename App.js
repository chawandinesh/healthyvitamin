import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import StackNavigator from './src/navigators/stackNavigator'

const App = () => {
  return (
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
        <StackNavigator/>
    //   </SafeAreaView>
    // </>
  );
};

export default App;
