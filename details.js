import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity,
    Text,
} from 'react-native';
import { IMAGE_WIDTH, height, SPACING, MAP } from './data'
import { ScrollView } from 'react-native';
import Animated, { FadeIn, ZoomIn } from 'react-native-reanimated';

const statusBarHeight = StatusBar.currentHeight;
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export default function Details({ route }) {

    const { goBack } = useNavigation();

    const {
        index,
        location,
        image,
    } = route.params.itens

    return (
        <View style={styles.container}>
            <Animated.Text
                sharedTransitionTag={`${index}-${location}`}
                style={styles.location}
            >
                {location}
            </Animated.Text>
            <Animated.Image
                sharedTransitionTag={`${index}-${image}`}
                style={StyleSheet.absoluteFillObject}
                source={{ uri: image }}
            />
            <AnimatedTouchableOpacity
                entering={FadeIn.duration(750).delay(250)}
                style={styles.arrowLeftContainer}
                activeOpacity={0.8}
                onPress={() => {
                    goBack();
                }}
            >
                <AntDesign name="arrowleft" size={34} color="white" />
            </AnimatedTouchableOpacity>
            <View
                style={{
                    flexGrow: 0,
                    position: 'absolute',
                    bottom: height * 0.15,
                }}>
                <Text style={{
                    textTransform: 'uppercase',
                    fontSize: 19,
                    color: '#fff',
                    left: SPACING,
                    position: 'relative',
                    marginBottom: SPACING / 2,
                }}>
                    Activities
                </Text>
                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: SPACING * 0.6,
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{

                    }}
                >
                    {[...Array(10).keys()].map((item, index) => {
                        return (
                            <Animated.View
                                entering={ZoomIn.duration(500).delay((index + 1) * 250)}
                                key={index.toString()}
                                style={styles.activityContainer}
                            >
                                <Image
                                    style={styles.activity}
                                    source={{ uri: MAP }}
                                />
                                <Text style={styles.activityText}>
                                    Activity #{item + 1}
                                </Text>
                            </Animated.View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    location: {
        width: IMAGE_WIDTH - (SPACING * 4),
        position: 'absolute',
        top: (statusBarHeight + SPACING * 2) * 3,
        left: SPACING * 2,
        fontSize: 40,
        fontWeight: "bold",
        color: "#fff",
        zIndex: 999,
    },
    arrowLeftContainer: {
        position: 'absolute',
        top: statusBarHeight + SPACING * 2,
        left: SPACING * 2,
        zIndex: 999,
    },
    activityContainer: {
        width: IMAGE_WIDTH * 0.4 + SPACING * 2,
        height: IMAGE_WIDTH * 0.7,
        marginHorizontal: SPACING * 0.6,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    activity: {
        marginTop: SPACING * 1,
        width: IMAGE_WIDTH * 0.4,
        height: IMAGE_WIDTH * 0.4,
        resizeMode: 'cover',
    },
    activityText: {
        fontWeight: 'bold',
        position: 'absolute',
        left: SPACING,
        top: IMAGE_WIDTH * 0.4 + SPACING * 1.5,
    }
});