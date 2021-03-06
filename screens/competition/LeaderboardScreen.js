import React, { Fragment, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import tailwind from "tailwind-rn";
import TopThree from './components/TopThree';
import { getAllProfiles } from '../../database/actions/Profile';
import _ from "lodash";
import Loading from '../../components/Loading';


export default function LeaderboardScreen(props) {
    const [leaderboards, setLeaderboards] = useState([]);
    const [topThree, setTopThree] = useState([]);

    useEffect(() => {
        getAllProfiles().then(response => {
            setLeaderboards(response);
            getTopThree(response);
        });
    }, []);

    const getTopThree = (data) => {
        const topThree = _.sortBy(data, function (o) {
            return o.currency;
        });

        const updatedTopThree = _.map(_.reverse(topThree), function (o) {
            return {
                name: o.name,
                currency: o.currency,
                avatar: o.avatar,
            };
        });
        setTopThree(updatedTopThree);
    }

    if (!leaderboards) {
        return (<Loading />)
    }

    return (
        <View style={tailwind("flex flex-col justify-center mt-5")}>
            <Text style={[{ fontFamily: 'Poppins-Bold' }, tailwind("mb-2 text-2xl self-center")]}>
                LEADERBOARDS
            </Text>

            <View style={tailwind("flex flex-row justify-around")}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>TODAY</Text>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: "#CCCCCC" }}>WEEK</Text>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: "#CCCCCC" }}>ALL TIME</Text>
            </View>
            <View style={{ marginTop: 10, borderBottomColor: '#A5A5A5', borderBottomWidth: 1 }} />

            {
                topThree && topThree.length !== 0
                    ? <TopThree data={topThree} />
                    : null
            }

            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 30, marginRight: 30, marginTop: 30 }}>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "#2B2B2B", margin: 3 }}>4</Text>
                        <Image source={require("../../assets/icons/down.png")} style={styles.icon} />
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                            <Image source={require("../../assets/competition/theresa.jpg")} style={styles.profile3} />
                            <View style={{ margin: 5 }}>
                                <Text style={styles.header}>Theresa Wong</Text>
                                <Text style={styles.text}>24 battles played</Text>
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
                                <Text style={styles.text}>20 battles played</Text>
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
                                <Text style={styles.text}>13 battles played</Text>
                            </View>
                            <View style={{ flexDirection: "row", margin: 15 }}>
                                <Text style={styles.header}>198 </Text>
                                <Image source={require("../../assets/icons/coin.png")} style={styles.icon} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 30, marginRight: 30, marginTop: 20, marginBottom: 100 }}>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "#2B2B2B", margin: 3 }}>7</Text>
                        <Image source={require("../../assets/icons/down.png")} style={styles.icon} />
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                            <Image source={require("../../assets/competition/lily.jpg")} style={styles.profile3} />
                            <View style={{ margin: 5 }}>
                                <Text style={styles.header}>Lily Lam</Text>
                                <Text style={styles.text}>7 battles played</Text>
                            </View>
                            <View style={{ flexDirection: "row", margin: 15 }}>
                                <Text style={styles.header}>198 </Text>
                                <Image source={require("../../assets/icons/coin.png")} style={styles.icon} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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