import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { t } from "react-native-tailwindcss";
import { useNavigation } from '@react-navigation/native';

function Competition(props) {
    const navigation = useNavigation();
    const accent = props.name === "Java for Beginners" 
        ? "#2D99B9" 
        : props.name === "Nuclear Physics" 
            ? "#7C82A0" 
            : "#009633" 

    return (
        <View style={styles.container} >
            {props.name === "Java for Beginners" ? <Image source={require("../../../assets/home/java.jpg")} style={styles.image} /> : null}
            {props.name === "Nuclear Physics" ? <Image source={require("../../../assets/home/nuclearphysics.jpg")} style={styles.image} /> : null}
            {props.name === "GCE O-Level English" ? <Image source={require("../../../assets/competition/olevel.jpeg")} style={styles.image} /> : null}

            <View style={[t.wFull, { width: 200, marginLeft: 25, marginRight: 20 }]}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>{props.name}</Text>
                <Text style={{ fontFamily: 'Poppins-Normal', fontSize: 13, color: "#8888aa", marginBottom: 15 }}>1v1 Battle</Text>
                <View style={[t.wFull, t.flex, t.flexRow, t.itemsCenter ]}>
                    {props.creator === "Nicholas Ong" ? <Image source={require("../../../assets/competition/nicholas.png")} style={styles.avatar} /> : null}
                    {props.creator === "Yvonne Lim" ? <Image source={require("../../../assets/competition/jerald.png")} style={styles.avatar} /> : null}
                    {props.creator === "Jerald Lim" ? <Image source={require("../../../assets/competition/yvonne.png")} style={styles.avatar} /> : null}
                    <View style={[t.mL3]}>
                        <Text style={[t.textSm, t.fontSemibold]}>{props.creator}</Text>
                        <Text style={[t.textXs], {color: "#8888aa"}}>Student</Text>
                    </View>
                </View>
                <TouchableOpacity style={[t.mT5, t.pY1, t.pX4, t.bgGray200, t.roundedFull, t.flex, t.flexRow, t.selfEnd, t.mR10]}>
                    <Text style={{fontFamily: 'Poppins-SemiBold', color:`${accent}`}}>
                        Join battle
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: 180,
        flexDirection: 'row',
        marginBottom: 30,
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    image: {
        width: 125,
        height: 180,
        borderRadius: 14
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 30
    }
})

export default Competition;