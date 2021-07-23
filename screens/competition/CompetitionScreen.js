import React, { Fragment, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { t } from "react-native-tailwindcss";
import firebase from "../../database/firebaseDB";
import Button from "../../components/Button";
import { BlurView } from "expo-blur";
import _ from "lodash";
import { createCompetition } from "../../database/actions/Competition";

function CompetitionScreen() {
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
        <View>
            
        </View>
    )

};

const styles = StyleSheet.create({
    title: {
        fontFamily: "Poppins-Bold",
    },
    description: {
        fontFamily: "Poppins-Normal",
    },
    backgroundImage:{
        ...StyleSheet.absoluteFillObject,
        width:'100%',
        height: 'auto',
    },
});


export default CompetitionScreen;