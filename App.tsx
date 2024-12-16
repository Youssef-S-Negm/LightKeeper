import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import NativeTorch from './specs/NativeTorch';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="On"
        onPress={() => NativeTorch.toggleOn()}
      />
      <Button
        title="Off"
        onPress={() => NativeTorch.toggleOff()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
