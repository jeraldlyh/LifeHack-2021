import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { t } from "react-native-tailwindcss";
import _ from "lodash"
import { getCourseImage } from "../../../database/actions/Course";
import Loading from "../../../components/Loading";
import tailwind from "tailwind-rn";
import { Fragment } from "react-is";

const ACCENTS = ["#2D99B9", "#7C82A0", "#009633", "#D291BC", "#FFDFD3"]

function Competition(props) {
    const [courseImage, setCourseImage] = useState("");

    useEffect(() => {
        getCourseImage(props.course)
            .then(image => setCourseImage(image));
    }, []);

    const getStatusText = () => {
        if (props.status) {
            return "In battle"
        }
        return "Waiting"
    }

    const getColorText = () => {
        if (props.status) {
            return { color: "#92F294" };
        };
        return { color: "#FF99A9" };
    };

    if (!courseImage) {
        return (
            <Loading />
        );
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: courseImage }} style={styles.image} />
            <View style={[t.wFull, tailwind("flex flex-col justify-center"),{ width: 200, marginLeft: 25, marginRight: 20 }]}>
                <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16 }}>{props.course}</Text>
                <View style={tailwind("flex flex-row justify-between mb-2")}>
                    <Text style={{ fontFamily: "Poppins-Normal", fontSize: 13, color: "#8888aa" }}>1v1 Battle</Text>
                    <View style={tailwind("flex flex-row")}>
                        <Text style={{ fontFamily: "Poppins-Normal", fontSize: 13, color: "#8888aa" }}>Status: </Text>
                        <Text style={[{ fontFamily: "Poppins-Bold", fontSize: 13 }, getColorText()]}>{getStatusText()} </Text>
                    </View>
                </View>
                <View style={[tailwind("flex flex-row justify-around items-center -mx-2 my-2")]}>
                    <View style={[t.flex, t.flexRow, t.itemsCenter]}>
                        <Image source={{ uri: props.host.avatar }} style={styles.avatar} />
                        <View style={[t.mL2]}>
                            <Text style={[t.textSm, t.fontSemibold]}>{props.host.name}</Text>
                            <Text style={[t.textXs], { color: "#8888aa" }}>Student</Text>
                        </View>
                    </View>
                    {
                        props.player.name
                            ? <Fragment>
                                <View style={{
                                    backgroundColor: 'black',
                                    width: 1,
                                    height: "100%"
                                }} />
                                <View style={[t.flex, t.flexRow, t.itemsCenter]}>
                                    <Image source={{ uri: props.player.avatar }} style={styles.avatar} />
                                    <View style={[t.mL2]}>
                                        <Text style={[t.textSm, t.fontSemibold]}>{props.player.name}</Text>
                                        <Text style={[t.textXs], { color: "#8888aa" }}>Student</Text>
                                    </View>
                                </View>
                            </Fragment>
                            : null
                    }

                </View>
                <TouchableOpacity
                    style={[tailwind("flex w-24 items-center self-center"), t.bgGray200, t.roundedFull, t.mT5, t.pY1]}
                    onPress={props.status ? console.log("") : props.navigation}
                >
                    <Text style={{ fontFamily: "Poppins-SemiBold", color: () => _.sample(ACCENTS) }}>
                        {props.status ? "-" : "Join battle"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 180,
        flexDirection: "row",
        marginBottom: 10,
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