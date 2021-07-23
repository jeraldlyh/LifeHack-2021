import React, { useState, Fragment } from "react";
import { View, Keyboard, TouchableWithoutFeedback, StyleSheet, Text, Image } from "react-native";
import { TextInput } from "react-native-paper";
import Button from "../../components/Button";
import BackButton from "./components/BackButton"
import { useAuth } from "../../context/AuthContext";
import { t } from "react-native-tailwindcss";

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { currentUser, setCurrentUser, loginUser } = useAuth()

    return (
        <Fragment>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={[t.flex1, t.itemsCenter, t.justifyCenter]}>
                    <Image source={require("../../assets/login/backgroundTwo.png")} style={StyleSheet.absoluteFillObject} />
                    <View style={[t.wFull, t.itemsCenter, t.justifyCenter, t._mT20]}>
                        <View style={[t.w4_5, t.mB8]}>
                            <View style={[t.selfStart, t.mB5]}>
                                <BackButton color="#fff" />
                            </View>
                            <Text style={[styles.text, t.text4xl, t.textWhite]}>Login</Text>
                        </View>
                        <TextInput
                            mode="flat"
                            label="Email"
                            style={[t.h16, t.w4_5, t.roundedLg]}
                            value={email}
                            onChangeText={email => setEmail(email)}
                            keyboardType="email-address"
                        />
                        <TextInput
                            mode="flat"
                            label="Password"
                            style={[t.h16, t.w4_5, t.roundedLg, t.mT3, t.mB5]}
                            value={password}
                            onChangeText={password => setPassword(password)}
                            secureTextEntry
                            right={<TextInput.Icon name="eye" />}
                        />
                        <Button onPress={() => loginUser(email, password)} text="Login" backgroundColor="#FE904B" textColor="#FFF" height={t.h12} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
});

export default LoginScreen;