import React, { useEffect, useState } from 'react';
import {
  Button,
  DeviceEventEmitter,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import NativeTorch from './specs/NativeTorch';
import NativeLightSensor from './specs/NativeLightSensor';

function App(): React.JSX.Element {
  const [isDim, setIsDim] = useState(false);

  useEffect(() => {
    NativeLightSensor.startListening();
    DeviceEventEmitter.addListener('lightIntensityChanged', (data: number) => {
      setIsDim(data < 5);
    });

    return () => {
      DeviceEventEmitter.removeAllListeners();
      NativeLightSensor.stopListening();
      NativeTorch.toggleOff();
    };
  }, []);

  useEffect(() => {
    if (isDim) {
      NativeTorch.toggleOn();
    } else {
      NativeTorch.toggleOff();
    }
  }, [isDim]);

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
