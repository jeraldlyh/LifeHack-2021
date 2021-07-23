import React, { Fragment, useEffect, useState } from "react";
import { TextInput, Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { t } from "react-native-tailwindcss";
import firebase from "../../database/firebaseDB";
import { BlurView } from "expo-blur";
import _ from "lodash";
import { createCompetition } from "../../database/actions/Competition";
import Competition from "./components/Competition";
import RNPickerSelect from 'react-native-picker-select';
import { useAuth } from "../../context/AuthContext";

function CompetitionListScreen({ navigation }) {
    const [competitions, setCompetitions] = useState([])
    const [displayModal, setDisplayModal] = useState(false)
    const [displayErrorModal, setDisplayErrorModal] = useState(false)
    const [displayCreateModal, setDisplayCreateModal] = useState(false)
    const [currentSelected, setCurrentSelected] = useState("")
    const [course, setCourse] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [amount, setAmount] = useState(0);

    const courses = [
        { label: 'Course 1', value: 'course1' },
        { label: 'Course 2', value: 'course2' },
        { label: 'Course 3', value: 'course3' },
    ];

    const difficulties = [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Advanced', value: 'advanced' },
    ];
    const { currentProfile } = useAuth()

    const startCompetition = () => {
        console.log(currentProfile)
        const user = {
            name: currentProfile.name,
            avatar: currentProfile.avatar
        }
        createCompetition("App Development", user, 1000, 1)
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
                            <Text style={[styles.description, t.flex, t.flexWrap]}>You're either the host of the room or you do not have sufficient currency to participate!</Text>
                            <TouchableOpacity
                                onPress={() => setDisplayErrorModal(false)}
                            >
                                <Text>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                    : null
            }
            {
                displayCreateModal
                    ? <BlurView intensity={95} style={[t.bgGray800, t.itemsCenter, t.justifyCenter, { height: "100%", position: "absolute", width: "100%", zIndex: 100 }]}>
                        <View style={[{ width: 300, height: 440 }, t.roundedLg, t.flex, t.flexCol, t.bgWhite, t.justifyCenter, t.itemsCenter]}>
                            <Text style={styles.title}>Course</Text>
                            <View style={[{width:200}, t.bgGray100, t.border, t.borderGray300, t.pX6, t.pY3, t.mB8, t.roundedFull]}>
                                <RNPickerSelect
                                    onValueChange={(value) => setCourse(value)}
                                    items={courses}
                                />
                            </View>
                            <Text style={styles.title}>Diffculty</Text>
                            <View style={[{width:200}, t.bgGray100, t.border, t.borderGray300, t.pX6, t.pY3, t.mB8, t.roundedFull]}>
                                <RNPickerSelect
                                    onValueChange={(value) => setDifficulty(value)}
                                    items={difficulties}
                                />
                            </View>
                            <Text style={styles.title}>Amount placed</Text>
                            <View style={[{width:200}, t.bgGray100, t.border, t.borderGray300, t.pX6, t.pY3, t.mB8, t.roundedFull]}>
                                <TextInput
                                    value={amount}
                                    onChangeText={value => setAmount(value)}
                                    keyboardType="number-pad"
                                    editable
                                />
                            </View>
                            {
                                course && difficulty && amount && amount !== 0 ?
                                <TouchableOpacity onPress={() => setDisplayCreateModal(false)} style={[{backgroundColor:"#FE904B"}, t.pY3, t.pX6, t.roundedLg]}>
                                    <Text style={[{color:"#FFFFFF"}, t.fontBold]}>Create battle</Text>
                                </TouchableOpacity>
                                :
                                <View style={[{opacity: 0.5, backgroundColor:"#FE904B"}, t.pY3, t.pX6, t.roundedLg]}>
                                    <Text style={[{color:"#FFFFFF"}, t.fontBold]}>Create battle</Text>
                                </View>
                            }
                        </View>
                    </BlurView>
                    : null
            }
            <TouchableOpacity style={styles.button} onPress={() => setDisplayCreateModal(true)}>
                <Text style={{ fontFamily: "Poppins-SemiBold", color: "#888888", fontSize: 16 }}>+ Create new battle</Text>
            </TouchableOpacity>
            {
                competitions && competitions.length !== 0
                    ?
                    competitions.map(competition => {
                        console.log(competition.quiz)
                        return (
                            <Competition
                                key={competition._id}
                                host={competition.host}
                                player={competition.player}
                                course={competition.course}
                                navigation={() => navigation.push("Competition", {
                                    title: competition.course,
                                    host: competition.host,
                                    currency: competition.amount,
                                    quiz: competition.quiz,
                                })}
                            />
                        )
                    })
                    :
                    <Text>No competitions ongoing now!</Text>
            }
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    title: {
        fontFamily: "Poppins-Bold",
        marginBottom: 10
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