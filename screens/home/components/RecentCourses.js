import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

function RecentCourses(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress ={()=>navigation.navigate('Courses', { screen: 'Java' })}>
            {props.name === "Java for beginners" ? (
                <Image
                    source={require("../../../assets/home/java.jpg")}
                    style={styles.container}
                />
            ) : null}
            {props.name === "Nuclear Physics" ? (
                <Image
                    source={require("../../../assets/home/nuclearphysics.jpg")}
                    style={styles.container}
                />
            ) : null}
            <View style={styles.details}>
                <View style={styles.nameDate}>
                    <Text
                        style={{
                            fontFamily: "Poppins-SemiBold",
                            fontSize: 17,
                            color: "white",
                        }}
                    >
                        {props.name}
                    </Text>
                   
                </View>
                <View style = {{flexDirection:'row',alignItems:'center',}}>
                    <Icon name="schedule" type="material" color="white" size = {15}/>

                    <Text
                        style={{
                            fontFamily: "Poppins-Normal",
                            fontSize: 12,
                            color: "white",
                        }}
                    >
                        : {props.time}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 245,
        height: 133,
        borderRadius: 14,
        marginRight: 20,
        marginBottom: 20,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    details: {
        height: 60,
        width: 179,
        position: "absolute",
        bottom: 10,
        left: 10,
        backgroundColor: "#000000",
        opacity: 0.6,
        borderRadius: 14,
        padding: 10,
    },
    nameDate: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default RecentCourses;
