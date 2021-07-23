import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";

function TopThree(props) {
    <View style={tailwind("flex flex-row justify-around mt-5")}>
        <View style={"flex flex-col items-center justify-center"}>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "#2B2B2B" }}>2</Text>
            <Image source={require("../../../assets/icons/down.png")} style={styles.icon} />
            <Image source={{ uri: props.one.avatar }} style={styles.profile2} />
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15, marginTop: 5 }}>{props.one.name}</Text>
            <View style={tailwind("flex flex-row items-center justify-center")}>
                <Image source={require("../../../assets/icons/coin.png")} style={styles.coin} />
                <Text style={{ fontFamily: 'Poppins-Normal', fontSize: 16, color: "#2B2B2B", margin: 3 }}>{props.one.currency}</Text>
            </View>
        </View>

        <View style={"flex flex-col items-center justify-center"}>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "#2B2B2B" }}>2</Text>
            <Image source={require("../../../assets/icons/down.png")} style={styles.icon} />
            <Image source={{ uri: props.one.avatar }} style={styles.profile1} />
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15, marginTop: 5 }}>{props.one.name}</Text>
            <View style={tailwind("flex flex-row items-center justify-center")}>
                <Image source={require("../../../assets/icons/coin.png")} style={styles.coin} />
                <Text style={{ fontFamily: 'Poppins-Normal', fontSize: 16, color: "#2B2B2B", margin: 3 }}>{props.one.currency}</Text>
            </View>
        </View>

        <View style={"flex flex-col items-center justify-center"}>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "#2B2B2B" }}>2</Text>
            <Image source={require("../../../assets/icons/down.png")} style={styles.icon} />
            <Image source={{ uri: props.one.avatar }} style={styles.profile3} />
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15, marginTop: 5 }}>{props.one.name}</Text>
            <View style={tailwind("flex flex-row items-center justify-center")}>
                <Image source={require("../../../assets/icons/coin.png")} style={styles.coin} />
                <Text style={{ fontFamily: 'Poppins-Normal', fontSize: 16, color: "#2B2B2B", margin: 3 }}>{props.one.currency}</Text>
            </View>
        </View>
    </View>
};

const styles = StyleSheet.create({
    profile1: {
        height: 90,
        width: 90,
        marginBottom: 16
    },
    profile2: {
        height: 70,
        width: 70,
        marginBottom: 8
    },
    profile3: {
        borderRadius: 50,
        marginLeft: 10,
        marginRight: 10,
        height: 55,
        width: 55,
        marginBottom: 8,
    },
    icon: {
        height: 23,
        width: 23,
        marginBottom: 5
    },
    coin: {
        height: 20,
        width: 20,
        marginTop: 3
    },
});

export default TopThree;