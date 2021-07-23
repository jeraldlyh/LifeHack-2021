import React, { Fragment, useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Animated, TouchableOpacity } from "react-native";
import { t } from "react-native-tailwindcss";
import firebase from "../../database/firebaseDB";
import Button from "../../components/Button";
import { BlurView } from "expo-blur";
import _ from "lodash";
import { leaveCompetition, updateAnswer } from "../../database/actions/Competition";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { getCourseImage } from "../../database/actions/Course";
import { useAuth } from "../../context/AuthContext";
import LoadingText from "./components/LoadingText";
import Loading from "../../components/Loading";


function CompetitionScreen({ route, navigation }) {
    const [competitionImage, setCompetitionImage] = useState("");
    const [roomData, setRoomData] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const { id, title, host, quiz, currency } = route.params;
    const { currentProfile } = useAuth();


    useEffect(() => {
        getCourseImage(title)
            .then(image => setCompetitionImage(image));

        const unsubscribe = firebase.firestore().collection("Competition")
            .doc(id)
            .onSnapshot(doc => {
                const tempRoomData = doc.data();
                setRoomData(tempRoomData);
                // if (tempRoomData.host.submitted && tempRoomData.player.submitted) {     // Award points when both submits their answer

                // };
            });

        return () => unsubscribe();
    }, []);

    const verifyAnswer = () => {
        return quiz.answer === activeIndex;
    }

    const isHost = () => {
        return currentProfile.name === host.name;
    }

    const submitAnswer = () => {
        setIsPlaying(false);
        const isCorrect = verifyAnswer();
        updateAnswer(id, isCorrect, isHost());
    }

    const isActive = (index) => {
        return activeIndex === index;
    };

    const onComplete = () => {
        const isCorrect = verifyAnswer();
        updateAnswer(id, isCorrect, isHost());
        return [false, 0];
    };

    const isWaitingForResponse = () => {
        const isCurrentHost = isHost();
        const isHostAndSubmitted = isCurrentHost && !roomData.player.submitted && roomData.host.submitted
        const isPlayerAndSubmitted = !isCurrentHost && !roomData.host.submitted && roomData.player.submitted

        if (isHostAndSubmitted || isPlayerAndSubmitted) {      // Player submitted but other has yet to
            return true;
        }
        return false;
    };

    const isBothPlayersEntered = () => {
        return roomData.player.entered && roomData.host.entered;
    };

    const leaveRoom = () => {
        leaveCompetition(id, isHost())
            .then(response => {
                if (response) {
                    navigation.navigate("List");
                };
            });
    };

    if (!roomData) {
        return <Loading />;
    };

    if (!isBothPlayersEntered()) {
        return (
            <BlurView intensity={95} style={[t.itemCenter, t.justifyCenter, { height: "100%", position: "absolute", width: "100%", zIndex: 100 }]}>
                <LoadingText text={[
                    "Be patient while we find another player...",
                    "Just a little bit more...",
                    "Oh, just received a phone call!"
                ]} />
                <View style={[t.selfCenter, t.w40, t.mT48]}>
                    <Button text="Leave Now" backgroundColor="#FE904B" textColor="#FFF" height={t.h10} width={t.wFull} onPress={() => leaveRoom()} />
                </View>
            </BlurView>
        )
    }

    return (
        <Fragment>
            {
                isWaitingForResponse()
                    ? <BlurView intensity={95} style={[t.itemCenter, t.justifyCenter, { height: "100%", position: "absolute", width: "100%", zIndex: 100 }]}>
                        <LoadingText text={[
                            "Be patient while we wait for their answer...",
                            "Just a little bit more...",
                            "Oh, look behind you!"
                        ]} />
                    </BlurView>
                    : null
            }

            <View style={[t.relative, t.wFull, t.h56]}>
                <Image source={{ uri: competitionImage }} style={[t.hFull, t.wFull, t.roundedLg]} />
                <View style={[t.absolute, t.w4_5, t.bgGray100, t.mL3, t.opacity50, t.roundedLg, { top: 110, height: 100 }]} />
                <View style={[t.absolute, t.flex, t.flexCol, t.justifyBetween, t.w4_5, t.mL3, t.p3, { top: 110, height: 100 }]}>
                    <View style={[t.flex, t.flexRow, t.wFull, t.justifyBetween]}>
                        <Text style={[styles.title, t.textXl, t.textWhite]}>{title}</Text>
                        <View style={[t.flex, t.flexRow, t.itemsCenter]}>
                            <Text style={[styles.description, t.mR1, t.textWhite]}>{currency}</Text>
                            <Image source={require("../../assets/icons/coin.png")} style={{ height: 30, width: 30 }} resizeMode="contain" />
                        </View>
                    </View>
                    <View style={[t.flex, t.flexRow, t.itemsCenter, t.wFull]}>
                        <Image source={{ uri: host.avatar }} style={{ height: 30, width: 30 }} resizeMode="contain" />
                        <View style={[t.flex, t.flexColm, t.mL2]}>
                            <Text style={[styles.description, t.textXs, t.textWhite]}>{host.name}</Text>
                            <Text style={[styles.description, t.textXs, t.textWhite]}>Student</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[t.flex, t.flexCol, t.mT30, t.p5, t.hFull, t.wFull, t.itemsCenter]}>
                <CountdownCircleTimer
                    strokeWidth={10}
                    isPlaying={isPlaying}
                    duration={5}
                    colors={[
                        ['#004777', 0.4],
                        ['#F7B801', 0.4],
                        ['#A30000', 0.2],
                    ]}
                    size={100}
                    onComplete={onComplete}
                >
                    {({ remainingTime, animatedColor }) => (
                        <Animated.Text style={[{ color: animatedColor }, t.text3xl, styles.description]}>
                            {remainingTime}
                        </Animated.Text>
                    )}
                </CountdownCircleTimer>

                <View style={[t.flex, t.flexCol, t.mT4, t.wFull, t.h32, t.bgWhite, t.p3, styles.shadow]}>
                    <Text style={[styles.title, t.textCenter]}>{quiz.question}</Text>
                    {
                        _.toArray(quiz.options).map((option, index) => {
                            return (
                                <Text key={index} style={[styles.description, t.mT1]}>({index + 1}) {option}</Text>
                            )
                        })
                    }
                </View>

                <View style={[t.mT5]} />
                {
                    _.toArray(quiz.options).map((option, index) => {
                        return (
                            <Fragment key={index}>
                                <View style={[t.mT2]} />
                                <Button key={index} onPress={() => setActiveIndex(index + 1)} text={option} backgroundColor={isActive(index + 1) ? "#FE904B" : "#e3e3e3"} textColor={isActive(index + 1) ? "#FFF" : "#000"} height={t.h12} />
                            </Fragment>
                        )
                    })
                }

                <View style={[t.mT2]} />
                <Button onPress={() => submitAnswer()} text="Confirm" backgroundColor="#FE904B" textColor="#FFF" height={t.h12} width={t.w3_5} />
            </View>
        </Fragment>
    )

};

const styles = StyleSheet.create({
    title: {
        fontFamily: "Poppins-Bold",
    },
    description: {
        fontFamily: "Poppins-Normal",
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});


export default CompetitionScreen;