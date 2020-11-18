import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import InputPanel from './components/InputPanel';
const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize:50}}>Hello world</Text>
      </View>

      <InputPanel
        sendText={(myValue) => alert(myValue)}
      />
    </SafeAreaView>
  );
};
export default App;
