import React from "react";
import Loading from "react-native-dynamic-text-loading";
import { StyleSheet, LogBox } from "react-native";

function LoadingText(props) {
    LogBox.ignoreLogs(["Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`"]);
    return (
        <Loading
            list={props.text}
            textStyle={styles.loading}
            spinnerIsVisible={false}
        />
    )
};

const styles = StyleSheet.create({
    loading: {
        fontSize: 24,
        marginTop: 50,
        color: "#fff",
        fontWeight: "800",
        width: 260,
        textAlign: "center",
        alignSelf: "baseline",
    }
});

export default LoadingText;