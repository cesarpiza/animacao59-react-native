import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { styles } from './styles';
import { IMAGE_WIDTH, SPACING } from '../../data';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

export default function Item(props) {

    const {
        index,
        location,
        image,
        numberOfDays,
        animatedValue,
    } = props;

    const itens = {
        index,
        location,
        image,
    };

    const inputRange = [
        index - 1,
        index,
        index + 1,
    ]

    // Para dar scale na "Image", se quiser...
    /* const animatedStyleImage = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: interpolate(animatedValue.value,
                        inputRange,
                        [1, 1.1, 1],
                    )
                },
            ]
        }
    }) */

    const animatedStyleText = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(animatedValue.value,
                        inputRange,
                        [IMAGE_WIDTH, 0, -IMAGE_WIDTH],
                    )
                },
            ]
        }
    })

    const { navigate } = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                navigate("Details", { itens });
            }}
        >
            <View style={styles.container}>
                <Animated.Text
                    sharedTransitionTag={`${index}-${location}`}
                    style={[styles.location, animatedStyleText]}
                >
                    {location}
                </Animated.Text>
                <Animated.Image
                    sharedTransitionTag={`${index}-${image}`}
                    style={[styles.image, /* animatedStyleImage */]}
                    source={{ uri: image }}
                />
                <View style={styles.numberOfDaysContainer}>
                    <Text style={styles.numberOfDays}>
                        {numberOfDays}{'\n'}<Text style={styles.days}>Days</Text>
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}