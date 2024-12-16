import { Animated, StyleSheet, useAnimatedValue } from 'react-native';
import React, { ReactNode, useEffect } from 'react';
import Colors from '../constants/colors';

interface AnimatedBackgroundProps {
    isDim: boolean
    children: ReactNode
}

const AnimatedBackground = ({ children, isDim }: AnimatedBackgroundProps) => {
    const transitionValue = useAnimatedValue(0);

    const dimAnimation = () => {
        Animated.timing(transitionValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const brightAnimation = () => {
        Animated.timing(transitionValue, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        if (isDim) {
            dimAnimation();
        } else {
            brightAnimation();
        }
    }, [isDim]);

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    backgroundColor: transitionValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [Colors.bright.backgroundColor, Colors.dim.backgroundColor],
                    }),
                },
            ]}
        >
            {children}
        </Animated.View>
    );
};

export default AnimatedBackground;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
});
