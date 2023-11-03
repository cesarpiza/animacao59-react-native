import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from 'react-native';
import { DATA, SPACING, IMAGE_WIDTH, width } from './data'
import Item from './components/item/index';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

const statusBarHeight = StatusBar.currentHeight;

export default function Home() {

    const animatedValue = useSharedValue(0);
    const [data, setData] = useState(DATA);

    const handleScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            animatedValue.value = event.contentOffset.x / (IMAGE_WIDTH + SPACING * 2);
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <Animated.FlatList
                onScroll={handleScroll}
                snapToInterval={IMAGE_WIDTH + SPACING * 2}
                decelerationRate={"fast"}
                contentContainerStyle={{
                    paddingLeft: SPACING,
                    paddingRight: width - (IMAGE_WIDTH + SPACING * 3),
                    paddingTop: statusBarHeight,
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item.key}
                renderItem={({ item, index }) => {
                    return (
                        <Item index={index} {...item} animatedValue={animatedValue} />
                    )
                }}
            />
        </SafeAreaView>
    );
}



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});