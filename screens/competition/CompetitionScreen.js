import React, { Fragment, useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Animated, TouchableOpacity } from "react-native";
import { t } from "react-native-tailwindcss";
import firebase from "../../database/firebaseDB";
import Button from "../../components/Button";
import { BlurView } from "expo-blur";
import _ from "lodash";
import { invalidateRoom, leaveCompetition, updateAnswer } from "../../database/actions/Competition";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { getCourseImage } from "../../database/actions/Course";
import { useAuth } from "../../context/AuthContext";
import LoadingText from "./components/LoadingText";
import Loading from "../../components/Loading";
import { addCurrency, increaseGamePlayed } from "../../database/actions/Profile";
import ConfettiCannon from "react-native-confetti-cannon";
import tailwind from "tailwind-rn";


function CompetitionScreen({ route, navigation }) {
    const [competitionImage, setCompetitionImage] = useState("");
    const [roomData, setRoomData] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const { id, title, host, quiz, currency } = route.params;
    const { currentProfile } = useAuth();
    const [displayCompletionModal, setDisplayCompletionModal] = useState(false);


    useEffect(() => {
        getCourseImage(title)
            .then(image => setCompetitionImage(image));

        const unsubscribe = firebase.firestore().collection("Competition")
            .doc(id)
            .onSnapshot(doc => {
                const tempRoomData = doc.data();
                setRoomData(tempRoomData);
                if (tempRoomData.host.submitted && tempRoomData.player.submitted) {     // Evaluate and award points when both submits their answer
                    invalidateRoom(id);                 // Invalidate room such that it does not appear on the list
                    setDisplayCompletionModal(true);
                    increaseGamePlayed(tempRoomData.host.name)
                    // increaseGamePlayed(tempRoomData.player.name)

                    if (tempRoomData.host.isCorrect) {
                        addCurrency(tempRoomData.host.name, tempRoomData.amount * 2);
                    }

                    // if (tempRoomData.player.isCorrect) {
                    //     addCurrency(tempRoomData.player.name, tempRoomData.amount * 2);
                    // }
                };
            });

        return () => unsubscribe();
    }, []);

    const verifyAnswer = () => {
        return quiz.answer === activeIndex;
    }

    const isHost = () => {
        console.log("Comparing host", currentProfile.name, roomData.host.name)
        return currentProfile.name === roomData.host.name;
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

    const exitRoom = () => {
        navigation.navigate("List");
    }

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
                    <View style={[t.mB2]}/>
                    <Text style={[styles.description, t.textXs, t.textRed500, t.textCenter]}>Your points will not be refunded for leaving!</Text>
                </View>
            </BlurView>
        )
    } else if (isWaitingForResponse()) {
        return (
            <BlurView intensity={95} style={[t.itemCenter, t.justifyCenter, { height: "100%", position: "absolute", width: "100%", zIndex: 100 }]}>
                <LoadingText text={[
                    "Be patient while we wait for their answer...",
                    "Just a little bit more...",
                    "Oh, look behind you!"
                ]} />
            </BlurView>
        )
    }

    const getFinalModal = (isCorrect) => {
        if (isCorrect) {
            return (
                <BlurView intensity={95} style={[tailwind("items-center justify-center"), { height: "100%", position: "absolute", width: "100%", zIndex: 100 }]}>
                    <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
                    <View style={[t.flex, t.flexCol, t.itemsCenter, t.justifyCenter, t.h56, t.w56, t.bgWhite, t.roundedLg]}>
                        <Text style={[styles.title, t.textCenter, t.mB1, t.textXl]}>Congralutations!</Text>
                        <View style={tailwind("flex flex-row items-center justify-center")}>
                            <Text style={[styles.title, t.textLg, t.mB3]}>+{roomData.amount} </Text>
                            <Image source={require("../../assets/icons/coin.png")} style={{ height: 25, width: 25 }} resizeMode="contain" />
                        </View>
                        <Text style={[styles.description, t.textCenter, t.mB3]}>You got the correct answer!</Text>
                        <Button text="Exit" backgroundColor="#FE904B" textColor="#FFF" height={t.h10} width={t.w3_5} onPress={() => exitRoom()} />
                    </View>
                </BlurView>
            );
        };
        return (
            <BlurView intensity={95} style={[t.itemsCenter, t.justifyCenter, { height: "100%", position: "absolute", width: "100%", zIndex: 100 }]}>
                <View style={[t.flex, t.flexCol, t.itemsCenter, t.justifyCenter, t.h56, t.w56, t.bgWhite, t.roundedLg]}>
                    <Text style={[styles.title, t.textCenter, t.mB1, t.textXl]}>Oh no... </Text>
                    <Text style={[styles.title, t.textCenter, t.textLg, t.mB3]}>-{roomData.amount} points</Text>
                    <Text style={[styles.description, t.textCenter, t.mB3]}>You got the wrong answer!</Text>
                    <Button text="Exit" backgroundColor="#FE904B" textColor="#FFF" height={t.h10} width={t.w3_5} onPress={() => exitRoom()} />
                </View>
            </BlurView>
        );
    };

    const populateFinalModal = () => {
        if (displayCompletionModal) {
            if (isHost()) {
                return getFinalModal(roomData.host.isCorrect);
            } else {
                return getFinalModal(roomData.player.isCorrect);
            };
        };
        return null;
    };

    return (
        <Fragment>
            {
                populateFinalModal()
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