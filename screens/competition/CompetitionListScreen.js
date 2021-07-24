import React, { useEffect, useState } from "react";
import { TextInput, Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, ScrollView } from "react-native";
import { t } from "react-native-tailwindcss";
import firebase from "../../database/firebaseDB";
import { BlurView } from "expo-blur";
import _ from "lodash";
import { checkCompetitionAvailability, createCompetition, joinCompetition } from "../../database/actions/Competition";
import Competition from "./components/Competition";
import RNPickerSelect from "react-native-picker-select";
import { useAuth } from "../../context/AuthContext";
import { getCourseDetails } from "../../database/actions/Course";
import Loading from "../../components/Loading";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { deductCurrency } from "../../database/actions/Profile";
import tailwind from "tailwind-rn";


function CompetitionListScreen({ navigation }) {
    const [competitions, setCompetitions] = useState([])
    const [displayModal, setDisplayModal] = useState(false)
    const [displayErrorModal, setDisplayErrorModal] = useState(false)
    const [displayCreateModal, setDisplayCreateModal] = useState(false)
    const [currentSelected, setCurrentSelected] = useState("")
    const [course, setCourse] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [amount, setAmount] = useState("");
    const [courses, setCourses] = useState([]);
    const { currentProfile, retrieveProfile } = useAuth();
    const difficulties = [
        { label: "Beginner", value: "Beginner" },
        { label: "Intermediate", value: "Intermediate" },
        { label: "Advanced", value: "Advanced" },
    ];


    const hasSufficientCurrency = () => {
        return currentProfile.currency >= parseInt(amount);
    }

    const getDifficulty = (level) => {
        switch (level) {
            case "Beginner":
                return 1;
            case "Intermediate":
                return 2;
            case "Advanced":
                return 3;
            default:
                break;
        };
    }

    const resetLabels = () => {
        setDifficulty("");
        setAmount("");
        setCourse("");
    };

    const getCourses = async () => {
        const courseDetails = await getCourseDetails();
        const tempCourses = _.map(courseDetails, function (o) {
            return {
                label: o.name,
                value: o.name,
            };
        });

        setCourses(tempCourses);
    };

    const submitCreate = () => {
        startCompetition();
        setDisplayCreateModal(false);
        resetLabels();
    }

    const startCompetition = () => {
        const user = {
            name: currentProfile.name,
            avatar: currentProfile.avatar
        };
        const value = parseInt(amount)
        createCompetition(course, user, value, getDifficulty(difficulty))
            .then(response => {
                deductCurrency(user.name, currentProfile.currency, value);          // Deduct host currency for creation of room
                retrieveProfile();                                                   // Manual refresh of profile in context
                joinRoom(response.id, course, user, value, response.quiz);          // Redirect host to room
            });
    };

    useEffect(() => {
        getCourses();
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

    const isHost = (name) => {
        return currentProfile.name === name;
    }

    const joinRoom = (roomID, course, host, amount, quiz) => {
        checkCompetitionAvailability(roomID, currentProfile.name, currentProfile.currency)
            .then(available => {
                if (available) {
                    if (!isHost(currentProfile.name)) {            // Deducts money from participant as well
                        deductCurrency(currentProfile.name, currentProfile.currency, amount);
                    };

                    const user = {              // Check if host is supplied via creation of room
                        name: currentProfile.name,
                        avatar: currentProfile.avatar
                    }

                    joinCompetition(roomID, user, isHost(currentProfile.name))
                        .then(response => {
                            if (response) {
                                navigation.push("Competition", {
                                    id: roomID,
                                    title: course,
                                    host: host,
                                    currency: amount,
                                    quiz: quiz,
                                });
                            }
                        })
                } else {
                    setDisplayModal(true);
                };
            })
    };

    const getCompetitionScreens = () => {
        if (competitions && competitions.length !== 0) {
            const output = competitions.map(competition => {
                return (
                    <Competition
                        key={competition._id}
                        host={competition.host}
                        player={competition.player}
                        course={competition.course}
                        status={competition.started}
                        navigation={() => joinRoom(competition._id, competition.course, competition.host, competition.amount, competition.quiz)}
                    />
                )
            })
            return (
                <ScrollView contentContainerStyle={tailwind("mt-1 flex flex-col items-center justify-center")}>
                    {output}
                </ScrollView >
            );
        };
        return <Text style={styles.description}>No competitions ongoing now!</Text>;
    };

    if (!difficulties && !courses) {
        return <Loading />
    };

    return (
        <SafeAreaView style={[t.flex, t.hFull, t.wFull, t.justifyCenter, t.itemsCenter, t.mT3]}>
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
                            <Text style={[styles.description, t.flex, t.flexWrap]}>There might be someone else waiting for the host or you do not have sufficient currency to participate! 😥</Text>
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
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                            <View style={[{ width: 300, height: 440 }, t.roundedLg, t.flex, t.flexCol, t.bgWhite, t.justifyCenter, t.itemsCenter]}>
                                <TouchableOpacity style={[t.selfEnd, t.mR4]} onPress={() => setDisplayCreateModal(false)}>
                                    <Ionicons name="close-circle-outline" size={25} />
                                </TouchableOpacity>
                                <Text style={styles.title}>Course</Text>
                                <View style={[{ width: 200 }, t.bgGray100, t.border, t.borderGray300, t.pX6, t.pY3, t.mB8, t.roundedFull]}>
                                    <RNPickerSelect
                                        onValueChange={(value) => setCourse(value)}
                                        items={courses}
                                    />
                                </View>
                                <Text style={styles.title}>Diffculty</Text>
                                <View style={[{ width: 200 }, t.bgGray100, t.border, t.borderGray300, t.pX6, t.pY3, t.mB8, t.roundedFull]}>
                                    <RNPickerSelect
                                        onValueChange={(value) => setDifficulty(value)}
                                        items={difficulties}
                                    />
                                </View>
                                <Text style={styles.title}>Amount placed</Text>
                                <View style={[{ width: 200 }, t.bgGray100, t.border, t.borderGray300, t.pX6, t.pY3, t.roundedFull]}>
                                    <TextInput
                                        value={amount}
                                        onChangeText={value => setAmount(value)}
                                        keyboardType="number-pad"
                                    />
                                </View>
                                {
                                    !hasSufficientCurrency() && amount
                                        ? <Text style={[styles.description, t.textXs, t.textRed500, t.mB6]}>You do not have sufficient currency</Text>
                                        : <View style={[t.mB8]} />
                                }
                                {
                                    course && difficulty && amount && hasSufficientCurrency() ?
                                        <TouchableOpacity onPress={() => submitCreate()} style={[{ backgroundColor: "#FE904B" }, t.pY3, t.pX6, t.roundedLg]}>
                                            <Text style={[{ color: "#FFFFFF" }, t.fontBold]}>Create battle</Text>
                                        </TouchableOpacity>
                                        :
                                        <View style={[{ opacity: 0.5, backgroundColor: "#FE904B" }, t.pY3, t.pX6, t.roundedLg]}>
                                            <Text style={[{ color: "#FFFFFF" }, t.fontBold]}>Create battle</Text>
                                        </View>
                                }
                            </View>
                        </TouchableWithoutFeedback>
                    </BlurView>
                    : null
            }
            <TouchableOpacity style={styles.button} onPress={() => setDisplayCreateModal(true)}>
                <Text style={{ fontFamily: "Poppins-SemiBold", color: "#888888", fontSize: 16 }}>+ Create new battle</Text>
            </TouchableOpacity>
            {
                getCompetitionScreens()
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
        width: "85%",
        paddingVertical: 13,
        flexDirection: "row",
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        fontSize: 20
    },
});


export default CompetitionListScreen;