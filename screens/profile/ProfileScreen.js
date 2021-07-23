import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import moment from "moment";
import { Icon } from "react-native-elements";
import { t } from "react-native-tailwindcss";
import { useAuth } from "../../context/AuthContext";

function ProfileScreen({ navigation }) {
    const { currentProfile } = useAuth();

    const formatJoinedDate = (date) => {
        return moment(date).fromNow();
    };

    return (
        <SafeAreaView>
            <View style={[t.selfEnd, t.mT8, t.mR6, t.z10]}>
                <TouchableOpacity
                    style={[t.bgGray300, t.w14, t.h14, t.roundedFull, t.opacity75, t.itemsCenter, t.flex, t.justifyCenter]}
                    onPress={() => navigation.push("Settings")}
                >
                    <Icon
                        name='settings'
                        type='ionicon'
                        color='#000'
                    />
                </TouchableOpacity>
            </View>
            <View style={[t.mB4, t.mL8, t.selfStart]}>
                <Text style={[styles.header, t.text3xl]}>Profile</Text>
            </View>
            <ScrollView style={[t.wFull]} showsVerticalScrollIndicator={false}>
                <View style={[t.flex, t.flexCol, t.itemsCenter, t.justifyCenter]}>

                    <Image source={require("../../assets/competition/nicholas.png")}
                        style={[styles.image, t.mT6]} />

                    <Text style={[t.mT4, styles.header]}>{currentProfile.name}</Text>

                    <View style={[t.mT1, { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }]}>
                        <Image
                            source={require("../../assets/course/time.png")} style={styles.icon}
                        />

                        <Text style={[t.mL2, styles.subText]}>
                            Joined {formatJoinedDate(currentProfile.registeredAt)}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Icon
                            name="game-controller-outline"
                            type="ionicon"
                            color="#a1a1a1"
                        />

                        <Text style={[t.mL2, t.mR1, styles.subText]}>{currentProfile.gamesPlayed} battles played | {currentProfile.currency}</Text>
                        <Image source={require("../../assets/icons/coin.png")}
                            style={[styles.currency]} />
                    </View>

                    <View style={[t.mT5]}>
                        <TouchableOpacity style={[styles.button, t.itemsCenter]}>
                            <Image source={require("../../assets/icons/edit.png")}
                                style={[styles.icons, t.mR3]} />
                            <Text style={styles.buttonText}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[t.mX6, t.mT8, { width: 340 }]}>
                    <Text style={[t.mT7, styles.subHeader]}>Bio</Text>
                    <View style={styles.container}>
                        <Text style={[t.mL2, styles.normalText]}>
                            {currentProfile.bio}
                        </Text>
                    </View>
                </View>

                <View style={[t.mX6, t.mT8, t.mB8, t.mL6, { width: 340 }]}>
                    <Text style={[styles.subHeader]}>Interests</Text>
                    <View style={styles.container}>
                        <View style={[t.flex, t.flexRow, t.flexWrap]}>
                            {
                                currentProfile.interests && currentProfile.interests.length !== 0
                                    ? currentProfile.interests.map((interest, key) => {
                                        return (
                                            <View key={key} style={styles.interestsContainer}>
                                                <Text style={styles.normalText}>{interest}</Text>
                                            </View>
                                        )
                                    })
                                    : <Text style={styles.normalText}>You currently do not have any interests!</Text>
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    header: {
        color: "black",
        fontSize: 28,
        textAlign: "justify",
        fontFamily: "Poppins-Bold"
    },

    subHeader: {
        color: "black",
        fontSize: 20,
        fontFamily: "Poppins-Bold",
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 15
    },

    subText: {
        color: "grey",
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Poppins-Normal"
    },

    normalText: {
        fontSize: 14,
        fontFamily: "Poppins-Normal",
        color: "black",
    },

    image: {
        width: 180,
        height: 180,
        borderRadius: 180 / 2,
    },

    icons: {
        width: 15,
        height: 16,
    },

    icon: {
        margin: 2,
        height: 15,
        width: 15,
    },

    currency: {
        width: 22,
        height: 22,
    },

    button: {
        borderRadius: 25,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 22,
        paddingRight: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.9,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 7 },
        backgroundColor: '#FE904B',
        width: 130,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    buttonText: {
        fontFamily: "Poppins-Normal",
        color: "white",
        fontSize: 13,
    },

    container: {
        marginTop: 5,
        backgroundColor: '#e6e6e6',
        borderRadius: 25,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 16,
        paddingRight: 16,
    },

    interestsContainer: {
        margin: 5,
        backgroundColor: '#F2F2F2',
        borderRadius: 25,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 9,
        paddingRight: 9,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.9,
        shadowRadius: 15,
    },
});