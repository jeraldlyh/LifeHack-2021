import React, { Fragment, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { t } from "react-native-tailwindcss";
import firebase from "../../database/firebaseDB";
import { Divider } from "react-native-elements";
import Button from "../../components/Button";
import { BlurView } from "expo-blur";
import _ from "lodash";
import { createCompetition } from "../../database/actions/Competition";
import Competition from "./components/Competition";

function CompetitionListScreen() {
    const [competitions, setCompetitions] = useState([])
    const [displayModal, setDisplayModal] = useState(false)
    const [displayErrorModal, setDisplayErrorModal] = useState(false)
    const [currentSelected, setCurrentSelected] = useState("")

    const startCompetition = () => {
        createCompetition("App Development", "a", 1000, 1)
    }

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection("Competition")
            .where("valid", "==", true)
            .onSnapshot(collection => {
                const updatedData = [];

                collection.forEach(doc => {
                    updatedData.push(
                        _.merge(doc.data(), { _id: doc.id })
                    );
                });

                setCompetitions(updatedData);
            })
        return () => unsubscribe();
    }, [])

    const cancelButton = () => {
        setCurrentSelected("")
        setDisplayModal(false)
    }

    const confirmButton = () => {
        // navigate to next screen
        setCurrentSelected("")
        setDisplayModal(false)
    }

    const joinRoom = (roomHost) => {
        // if (roomHost) {
        //     return setDisplayErrorModal(true)
        // }
        return setDisplayModal(true)
    }

    return (
        <SafeAreaView style={[t.flex, t.hFull, t.wFull, t.justifyCenter, t.itemsCenter]}>
            {
                displayModal
                    ? <BlurView intensity={95} style={[t.itemCenter, t.justifyCenter, { height: "100%", position: "absolute", width: "100%", zIndex: 100 }]}>
                        <View style={[t.flex, t.flexCol, t.bgWhite, t.justifyCenter, t.itemsCenter]}>
                            <Text style={styles.title}>Are you sure?</Text>
                            <Text style={styles.description}>You are about to join {currentSelected}...</Text>
                            <View style={[t.flex, t.flexRow, t.justifyAround, t.wFull]}>
                                <TouchableOpacity>
                                    <Text>Confirm</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => cancelButton()}
                                >
                                    <Text>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </BlurView>
                    : null
            }
            {
                displayErrorModal
                    ? <BlurView intensity={95} style={[t.itemCenter, t.justifyCenter, { height: "100%", position: "absolute", width: "100%", zIndex: 100 }]}>
                        <View style={[t.flex, t.flexCol, t.bgWhite, t.justifyCenter, t.itemsCenter]}>
                            <Text style={styles.title}>Error</Text>
                            <Text style={[styles.description, t.flex, t.flexWrap]}>You"re either the host of the room or you do not have sufficient currency to participate!</Text>
                            <TouchableOpacity
                                onPress={() => setDisplayErrorModal(false)}
                            >
                                <Text>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                    : null
            }
            <TouchableOpacity style={styles.button} onPress={() => startCompetition()}>
                <Text style={{fontFamily: "Poppins-SemiBold", color:"#888888", fontSize: 16}}>+ Create new battle</Text>
            </TouchableOpacity>
            <Competition name="Java for Beginners" creator="Nicholas Ong" />
            <Competition name="Nuclear Physics" creator="Yvonne Lim" />
            <Competition name="GCE O-Level English" creator="Jerald Lim" />
            {/* {
                competitions && competitions.length !== 0
                    ?
                    competitions.map(competition => {
                        return (
                            <View key={competition._id} style={[t.border2, t.borderBlack]}>
                                <Text>Status: {competition.started ? "Started" : "Pending"}</Text>
                                <Text>Topic: {competition.course}</Text>
                                <Text>Created by: {competition.host}</Text>
                                <TouchableOpacity
                                    onPress={() => joinRoom(competition.host)}
                                >
                                    <Text>Join</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                    : <View style={[t.flex, t.justifyCenter, t.itemsCenter, t.hFull]}>
                        <Text>No competitions ongoing now!</Text>
                    </View>
            } */}
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    title: {
        fontFamily: "Poppins-Bold",
    },
    description: {
        fontFamily: "Poppins-Normal",
    },
    button: {
        width: '85%',
        paddingVertical: 13,
        flexDirection: 'row',
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        fontSize: 20
    },
});


export default CompetitionListScreen;