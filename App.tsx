import React, { useEffect, useState } from 'react';
import {
  Animated,
  Button,
  DeviceEventEmitter,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import NativeTorch from './specs/NativeTorch';
import NativeLightSensor from './specs/NativeLightSensor';
import AnimatedBackground from './components/AnimatedBackground';
import AnimatedStatusBar from './components/AnimatedStatusBar';
import AnimatedText from './components/AnimatedText';
import AnimatedIcon from './components/AnimatedIcon';

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
      <AnimatedStatusBar isDim={isDim} />
      <AnimatedBackground isDim={isDim}>
        <AnimatedText isDim={isDim} />
        <AnimatedIcon isDim={isDim} />
      </AnimatedBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
