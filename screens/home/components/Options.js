import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { t } from "react-native-tailwindcss";
import { useNavigation } from "@react-navigation/native";

function Options(props) {
    const navigation = useNavigation();

    const onPressed = () => {
        const name = props.name;

        if (name === "Courses") {
            navigation.push("Courses");
        } else if (name === "Forums") {
            navigation.push("Forums");
        // } else if (name === "News") {
        //     navigation.push("News");
        // } else if (name === "Community") {
        //     navigation.push("Community");
        // };
    };}

    return (
        <TouchableOpacity
            style={[styles.container, t.itemsCenter,t.justifyCenter]}
            onPress = {()=>onPressed()}
        >   
            { props.name === "Courses" ? <Image source={require("../../../assets/icons/courses.jpg")} style={styles.image} /> : null }
            { props.name === "Forums" ? <Image source={require("../../../assets/icons/forums.jpg")} style={styles.image} /> : null }
            { props.name === "Games" ? <Image source={require("../../../assets/icons/games.jpg")} style={styles.image} /> : null }
            {/* { props.name === "Community" ? <Image source={require("../../../assets/icons/community.png")} style={styles.community} /> : null } */}

            <Text style={[t.mT1,t.fontSemibold, styles.text]}>{props.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 88,
        height: 104,
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,  
    },
    image: {
        height: 40,
        width: 40,
    },
    community: {
        height: 22,
        width: 29,
    },
    text: {
        color: '#2b2b2b',
        fontFamily:'Poppins-SemiBold'
    }
});

export default Options;
