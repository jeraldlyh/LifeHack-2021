import React, { Fragment } from "react";
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { t } from "react-native-tailwindcss"
import Button from "../../components/Button";
import Title from "../../components/Title";


function WelcomeScreen({ navigation }) {
    return (
        <Fragment>
            <Swiper autoplay={true} showsPagination={true}>
                <ImageBackground source={require("../../assets/login/backgroundOne.png")} style={styles.image}>
                    <View style={[t.flex, t.flexCol, t.pX8, t.fontNormal, t.mT32,]}>
                        <View style={[t.selfEnd]}>
                            <Title fontSize={28} />
                        </View>
                        <Text style={[t.textWhite, t.fontExtrabold, t.textJustify, t.text2xl]}>Step-by-step guide for your migration process</Text>
                    </View>
                </ImageBackground>
                <ImageBackground source={require("../../assets/login/backgroundTwo.png")} style={styles.image}>
                    <View style={[t.flex, t.flexCol, t.pX8, t.fontNormal, t.mT32,]}>
                        <View style={[t.selfEnd]}>
                            <Title fontSize={28} />
                        </View>
                        <Text style={[t.textWhite, t.fontExtrabold, t.textJustify, t.text2xl]}>Step-by-step guide for your migration process</Text>
                    </View>
                </ImageBackground>
                <ImageBackground source={require("../../assets/login/backgroundThree.png")} style={styles.image}>
                    <View style={[t.flex, t.flexCol, t.pX8, t.fontNormal, t.mT32,]}>
                        <View style={[t.selfEnd]}>
                            <Title fontSize={28} />
                        </View>
                        <Text style={[t.textWhite, t.fontExtrabold, t.textJustify, t.text2xl]}>Step-by-step guide for your migration process</Text>
                    </View>
                </ImageBackground>
            </Swiper>

            <View style={[t.absolute, t.selfCenter, t.w80, t.pB4, { bottom: '17%' }]}>
                <View style={[t.flex, t.flexCol, t.justifyCenter, t.itemsCenter]}>
                    <Button onPress={() => navigation.push('Login')} text="Login" backgroundColor="#FE904B" textColor="#FFF" height={t.h10} />
                    <TouchableOpacity onPress={() => navigation.push("Register")}>
                        <Text style={[t.flex, t.flexRow, t.textWhite, t.pT5, t.pL2, t.textSm]}>Don't have an account? <Text style={[t.fontSemibold, t.textCustomOrange]}>Sign up</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Fragment>
    )
};

const styles = StyleSheet.create({
    image: {
        flex: 3,
        resizeMode: "cover",
        justifyContent: "center"
    },
    font: {
        fontFamily: "Poppins-Normal"
    }
});


export default WelcomeScreen;