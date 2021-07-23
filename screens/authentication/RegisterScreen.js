import React, { useState, Fragment } from "react";
import { View, Keyboard, ImageBackground, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import Button from "../../components/Button";
import BackButton from "./components/BackButton"
import { useAuth } from "../../context/AuthContext";
import { t } from "react-native-tailwindcss";

function RegisterScreen({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { registerUser } = useAuth()

    return (
        <Fragment>
            <ImageBackground source={require("../../assets/login/backgroundTwo.png")} style={styles.image} />
            <View style={[t.absolute, t.selfCenter, t.wFull, t.mT64]}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={[t.wFull, t.itemsCenter, t.justifyCenter, t._mT20]}>
                        <View style={[t.w4_5, t.mB8]}>
                            <View style={[t.selfStart, t.mB5]}>
                                <BackButton color="#fff" />
                            </View>
                            <Text style={[styles.text, t.text4xl, t.textWhite]}>Register</Text>
                        </View>
                        <TextInput
                            mode="flat"
                            label="Name"
                            style={[t.h16, t.w4_5, t.roundedLg]}
                            value={name}
                            onChangeText={name => setName(name)}
                        />
                        <TextInput
                            mode="flat"
                            label="Email"
                            style={[t.h16, t.w4_5, t.roundedLg, t.mT2, t.mB2]}
                            value={email}
                            onChangeText={email => setEmail(email)}
                            keyboardType="email-address"
                        />
                        <TextInput
                            mode="flat"
                            label="Password"
                            style={[t.h16, t.w4_5, t.roundedLg, t.mB5]}
                            value={password}
                            onChangeText={password => setPassword(password)}
                            secureTextEntry
                            right={<TextInput.Icon name="eye" />}
                        />
                        <Button onPress={() => registerUser(name, email, password)} text="Register" backgroundColor="#FE904B" textColor="#FFF" height={t.h12} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
    image: {
        flex: 3,
        resizeMode: "cover",
        justifyContent: "center"
    },
});

export default RegisterScreen;