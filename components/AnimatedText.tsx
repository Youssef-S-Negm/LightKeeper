import { Animated, StyleSheet, useAnimatedValue } from 'react-native';
import React, { useEffect } from 'react';
import Colors from '../constants/colors';

const AnimatedText = ({ isDim }: { isDim: boolean }) => {
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
        <Animated.Text
            style={[
                styles.text,
                {
                    color: transitionValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [Colors.bright.text, Colors.dim.text],
                    }),
                },
            ]}
        >
            {isDim ? "You're in a dark environment" : "You're in a bright environment"}
        </Animated.Text>
    );
};

export default AnimatedText;

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});
