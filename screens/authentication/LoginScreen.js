import React, { useState, Fragment } from "react";
import { View, Keyboard, ImageBackground, TouchableWithoutFeedback, StyleSheet, Text, Image } from "react-native";
import { TextInput } from "react-native-paper";
import Button from "../../components/Button";
import BackButton from "./components/BackButton"
import { useAuth } from "../../context/AuthContext";
import { t } from "react-native-tailwindcss";

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secureText, setSecureText] = useState(true);
    const { currentUser, setCurrentUser, loginUser } = useAuth()

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
                            <Text style={[styles.text, t.text4xl, t.textWhite]}>Login</Text>
                        </View>
                        <TextInput
                            mode="flat"
                            label="Email"
                            style={[t.h14, t.w4_5, t.roundedLg]}
                            value={email}
                            onChangeText={email => setEmail(email.toLowerCase())}
                            keyboardType="email-address"
                            theme={{ colors: { primary: "#FF5029" } }}
                        />
                        <TextInput
                            mode="flat"
                            label="Password"
                            style={[t.h14, t.w4_5, t.roundedLg, t.mT3, t.mB6]}
                            value={password}
                            onChangeText={password => setPassword(password)}
                            secureTextEntry={secureText}
                            right={<TextInput.Icon name="eye" onPress={() => setSecureText(!secureText)}/>}
                            theme={{ colors: { primary: "#FF5029" } }}
                        />
                        <Button onPress={() => loginUser(email, password)} text="Login" backgroundColor="#FE904B" textColor="#FFF" height={t.h12} />
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

export default LoginScreen;