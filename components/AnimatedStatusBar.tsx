import { StatusBar } from 'react-native';
import React from 'react';
import Colors from '../constants/colors';

const AnimatedStatusBar = ({ isDim }: { isDim: boolean }) => {
    return (
        <StatusBar
            animated
            backgroundColor={isDim ? Colors.dim.backgroundColor : Colors.bright.backgroundColor}
            barStyle={isDim ? 'light-content' : 'dark-content'}
        />
    );
};

export default AnimatedStatusBar;
