import { StyleSheet } from 'react-native';
import { IMAGE_WIDTH, IMAGE_HEIGHT, DAYS_SIZE, DAYS_COlOR, SPACING } from '../../data';

export const styles = StyleSheet.create({
    container: {
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        marginHorizontal: SPACING,
        /* borderRadius: SPACING * 2,
        overflow: "hidden", */
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
    },
    location: {
        width: IMAGE_WIDTH - (SPACING * 4),
        position: 'absolute',
        top: SPACING * 2,
        left: SPACING * 2,
        fontSize: 40,
        fontWeight: "bold",
        color: "#fff",
        zIndex: 999,
    },
    numberOfDaysContainer: {
        position: "absolute",
        bottom: SPACING * 2,
        left: SPACING * 2,
        width: DAYS_SIZE,
        height: DAYS_SIZE,
        backgroundColor: DAYS_COlOR,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: DAYS_SIZE / 2,
        zIndex: 999,
    },
    numberOfDays: {
        textAlign: "center",
        fontSize: DAYS_SIZE * 0.4,
        fontWeight: "bold",
        color: '#fff',
    },
    days: {
        fontSize: DAYS_SIZE * 0.2,
        fontWeight: 'normal',
        color: '#fff',
        lineHeight: DAYS_SIZE * 0.2,
    },
});