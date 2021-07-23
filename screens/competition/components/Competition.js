import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { t } from "react-native-tailwindcss";
import _ from "lodash"
import { getCourseImage } from "../../../database/actions/Course";
import Loading from "../../../components/Loading";


const ACCENTS = ["#2D99B9", "#7C82A0", "#009633"]

function Competition(props) {
    const [courseImage, setCourseImage] = useState("");

    useEffect(() => {
        getCourseImage(props.course)
            .then(image => setCourseImage(image));
    }, []);

    if (!courseImage) {
        return (
            <Loading />
        )
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: courseImage }} style={styles.image} />
            <View style={[t.wFull, { width: 200, marginLeft: 25, marginRight: 20 }]}>
                <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16 }}>{props.course}</Text>
                <Text style={{ fontFamily: "Poppins-Normal", fontSize: 13, color: "#8888aa", marginBottom: 15 }}>1v1 Battle</Text>
                <View style={[t.wFull, t.flex, t.flexRow, t.itemsCenter]}>
                    <Image source={{ uri: props.host.avatar }} style={styles.avatar} />
                    <View style={[t.mL3]}>
                        <Text style={[t.textSm, t.fontSemibold]}>{props.host.name}</Text>
                        <Text style={[t.textXs], { color: "#8888aa" }}>Student</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={[t.mT5, t.pY1, t.pX4, t.bgGray200, t.roundedFull, t.flex, t.flexRow, t.selfEnd, t.mR10]}
                    onPress={props.navigation}
                >
                    <Text style={{ fontFamily: "Poppins-SemiBold", color: _.sample(ACCENTS) }}>
                        Join battle
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "85%",
        height: 180,
        flexDirection: "row",
        marginBottom: 30,
        alignItems: "center",
        borderRadius: 14,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    image: {
        width: 125,
        height: 180,
        borderRadius: 14
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 30
    }
})

export default Competition;