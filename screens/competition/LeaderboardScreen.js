import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import tailwind from "tailwind-rn";
import { t } from "react-native-tailwindcss";

export default function LeaderboardScreen(props) {
    return (
        <View style={[t.mT3]}>
            <View style={{ justifyContent: 'center', alignItems: 'center',marginBottom: 25 }}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 22 }}>
                    LEADERBOARDS
                </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 50, marginRight: 50 }}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>TODAY</Text>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: "#CCCCCC" }}>WEEK</Text>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: "#CCCCCC" }}>ALL TIME</Text>
            </View>
            <View style={{ marginTop: 10, borderBottomColor: '#A5A5A5', borderBottomWidth: 1 }} />

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 35, marginRight: 35, marginTop: 40 }}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "#2B2B2B", margin: 3 }}>2</Text>
                    <Image source={require("../../assets/icons/down.png")} style={styles.icon} />
                    <Image source={require("../../assets/competition/jerald.png")} style={styles.profile2} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15, marginTop: 5 }}>Jerald Lim</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../../assets/icons/coin.png")} style={styles.coin} />
                        <Text style={{ fontFamily: 'Poppins-Normal', fontSize: 16, color: "#2B2B2B", margin: 3 }}>245</Text>
                    </View>
                </View>

                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Image source={require("../../assets/icons/crown.png")} style={styles.icon} />
                    <Image source={require("../../assets/competition/yvonne.png")} style={styles.profile1} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15, marginTop: 5 }}>Yvonne Lim</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../../assets/icons/coin.png")} style={styles.coin} />
                        <Text style={{ fontFamily: 'Poppins-Normal', fontSize: 16, color: "#2B2B2B", margin: 3 }}>256</Text>
                    </View>
                </View>

                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Image source={require("../../assets/icons/up.png")} style={styles.icon} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "#2B2B2B", margin: 3 }}>3</Text>
                    <Image source={require("../../assets/competition/nicholas.png")} style={styles.profile2} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15, marginTop: 5 }}>Nicholas Ong</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../../assets/icons/coin.png")} style={styles.coin} />
                        <Text style={{ fontFamily: 'Poppins-Normal', fontSize: 16, color: "#2B2B2B", margin: 3 }}>236</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 30, marginRight: 30, marginTop: 20 }}>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "#2B2B2B", margin: 3 }}>4</Text>
                    <Image source={require("../../assets/icons/down.png")} style={styles.icon} />
                </View>

                <TouchableOpacity style={styles.button}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                        <Image source={require("../../assets/competition/theresa.jpg")} style={styles.profile3} />
                        <View style={{ margin: 5 }}>
                            <Text style={styles.header}>Theresa Wong</Text>
                            <Text style={styles.text}>@Theresa_w</Text>
                        </View>
                        <View style={{ flexDirection: "row", margin: 15 }}>
                            <Text style={styles.header}>198 </Text>
                            <Image source={require("../../assets/icons/coin.png")} style={styles.icon} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 30, marginRight: 30, marginTop: 20 }}>
                <View style={{ marginTop: 15 }}>
                    <Image source={require("../../assets/icons/up.png")} style={styles.icon} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "#2B2B2B", margin: 3 }}>5</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                        <Image source={require("../../assets/competition/zachary.jpg")} style={styles.profile3} />
                        <View style={{ margin: 5 }}>
                            <Text style={styles.header}>Zachary Tan</Text>
                            <Text style={styles.text}>@Zaccy</Text>
                        </View>
                        <View style={{ flexDirection: "row", margin: 15 }}>
                            <Text style={styles.header}>198 </Text>
                            <Image source={require("../../assets/icons/coin.png")} style={styles.icon} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 30, marginRight: 30, marginTop: 20 }}>
                <View style={{ marginTop: 15 }}>
                    <Image source={require("../../assets/icons/up.png")} style={styles.icon} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "#2B2B2B", margin: 3 }}>6</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                        <Image source={require("../../assets/competition/william.jpg")} style={styles.profile3} />
                        <View style={{ margin: 5 }}>
                            <Text style={styles.header}>William Wong</Text>
                            <Text style={styles.text}>@WillyW</Text>
                        </View>
                        <View style={{ flexDirection: "row", margin: 15 }}>
                            <Text style={styles.header}>198 </Text>
                            <Image source={require("../../assets/icons/coin.png")} style={styles.icon} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 30, marginRight: 30, marginTop: 20 }}>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "#2B2B2B", margin: 3 }}>7</Text>
                    <Image source={require("../../assets/icons/down.png")} style={styles.icon} />
                </View>

                <TouchableOpacity style={styles.button}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                        <Image source={require("../../assets/competition/lily.jpg")} style={styles.profile3} />
                        <View style={{ margin: 5 }}>
                            <Text style={styles.header}>Lily Lam</Text>
                            <Text style={styles.text}>@Double L</Text>
                        </View>
                        <View style={{ flexDirection: "row", margin: 15 }}>
                            <Text style={styles.header}>198 </Text>
                            <Image source={require("../../assets/icons/coin.png")} style={styles.icon} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    lessonNo: {
        fontFamily: 'Poppins-Bold',
        fontSize: 40,
        color: "#C2C2C2",
        marginRight: 20,
    },
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
    button: {
        height: 90,
        width: 300,
        borderRadius: 50,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    header: {
        color: "#2B2B2B",
        fontFamily: 'Poppins-SemiBold'
    },
    text: {
        color: "#AEAEBF",
        fontFamily: 'Poppins-Normal'
    },
})