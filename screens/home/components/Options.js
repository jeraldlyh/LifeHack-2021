import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { t } from "react-native-tailwindcss";
import { useNavigation } from "@react-navigation/native";

function Options(props) {
    const navigation = useNavigation();

    // const onPressed = () => {
    //     const name = props.name;

    //     if (name === "Courses") {
    //         navigation.push("Document");
    //     } else if (name === "Trivia") {
    //         navigation.push("Trivia");
    //     } else if (name === "News") {
    //         navigation.push("News");
    //     } else if (name === "Community") {
    //         navigation.push("Community");
    //     };
    // };

    return (
        <TouchableOpacity
            style={[styles.container, t.itemsCenter,t.justifyCenter]}
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
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 1,  
    },
    image: {
        height: 25,
        width: 25,
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
