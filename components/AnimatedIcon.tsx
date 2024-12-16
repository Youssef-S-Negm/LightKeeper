import { Animated, Easing, useAnimatedValue } from 'react-native';
import React, { useEffect } from 'react';

const AnimatedIcon = ({ isDim }: { isDim: boolean }) => {
    const transitionValue = useAnimatedValue(0);

    const brightAnimation = () => {
        Animated.loop(
            Animated.timing(transitionValue, {
                toValue: 1,
                duration: 6000,
                useNativeDriver: true,
                easing: Easing.linear,
            })
        ).start();
    };

    const dimAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(transitionValue, {
                    toValue: 0.1,
                    duration: 3000,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
                Animated.timing(transitionValue, {
                    toValue: 0,
                    duration: 3000,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
            ])
        ).start();
    };

    useEffect(() => {
        if (isDim) {
            dimAnimation();
        } else {
            brightAnimation();
        }
    }, [isDim]);

    return (
        <Animated.Image
            source={isDim ? require('../assets/images/moon.png') : require('../assets/images/sun.png')}
            style={[
                {
                    transform: [{
                        rotate: transitionValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '360deg'],
                        }),
                    }],
                },
            ]}
        />
    );
};

export default AnimatedIcon;
