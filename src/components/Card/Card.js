import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

import styles from "./CardStyles";

const plantImages = {
    p1: require("../../assets/plants/p1.png"),
    p2: require("../../assets/plants/p2.png"),
    p3: require("../../assets/plants/p3.png"),
    p4: require("../../assets/plants/p4.png"),
    p5: require("../../assets/plants/p5.png"),
    p6: require("../../assets/plants/p6.png"),
    p7: require("../../assets/plants/p7.png"),
    p8: require("../../assets/plants/p8.png"),
    p9: require("../../assets/plants/p9.png"),
    p10: require("../../assets/plants/p10.png"),
    p11: require("../../assets/plants/p11.png"),
    p12: require("../../assets/plants/p12.png"),
    p13: require("../../assets/plants/p13.png"),
};

function Card({ plantImage, plantName, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={styles.container} >
                <View style={styles.box}>
                    <Image style={styles.image} source={plantImages[plantImage]} resizeMode="stretch" />
                </View>
                <Text style={styles.plantName} >{plantName}</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default Card;