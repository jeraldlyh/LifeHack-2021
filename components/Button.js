import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { t } from "react-native-tailwindcss";

function Button(props) {
    const styles = StyleSheet.create({
        background: {
            backgroundColor: `${props.backgroundColor}`,
        },
        text: {
            fontFamily: "Poppins-Bold",
            color: `${props.textColor}`,
            fontSize: 16,
        }
    });

    const getDesign = () => {
        if (props.height && props.width) {
            return [t.roundedLg, t.flex, t.itemsCenter, t.justifyCenter, props.height, props.width, t.itemsCenter, t.justifyCenter];
        }
        if (props.height) {
            return [t.roundedLg, t.flex, t.itemsCenter, t.justifyCenter, props.height, t.w4_5, t.itemsCenter, t.justifyCenter];
        }
        return [t.roundedLg, t.flex, t.itemsCenter, t.justifyCenter, t.h16, t.w4_5, t.itemsCenter, t.justifyCenter];
    };

    return (
        <View style={[styles.background, getDesign()]}>
            <TouchableOpacity onPress={props.onPress} style={[t.wFull]}>
                <View style={[t.flex, t.flexRow, t.itemsCenter, t.justifyCenter]}>
                    <Text style={[styles.text]}>{props.text}</Text>
                    {props.children}
                </View>
            </TouchableOpacity>
        </View>
    );
};


export default Button;