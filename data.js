import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get('window');
export const IMAGE_WIDTH = width * 0.7;
export const IMAGE_HEIGHT = height * 0.5;
export const DAYS_SIZE = IMAGE_WIDTH * 0.2;
export const DAYS_COlOR = "tomato";
export const MAP_SIZE = width * 0.3;
export const SPACING = IMAGE_WIDTH * 0.04;

export const DATA = [
    {
        key: "01",
        location: "Krabi, Thailand",
        numberOfDays: 9,
        image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
    },
    {
        key: "02",
        location: "Bucharest, Romania",
        numberOfDays: 5,
        image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1",
    },
    {
        key: "03",
        location: "Iceland",
        numberOfDays: 3,
        image: "https://images.unsplash.com/photo-1531168556467-80aace0d0144",
    },
    {
        key: "04",
        location: "Roma, Italy",
        numberOfDays: 7,
        image: "https://images.unsplash.com/photo-1555992828-ca4dbe41d294",
    },
    {
        key: "05",
        location: "Rio de Janeiro, Brazil",
        numberOfDays: 15,
        image: "https://images.unsplash.com/photo-1591468069148-5cc79ed1caaa",
    },
];

export const MAP = "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1920,c_limit/GoogleMapTA.jpg";