import React from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import Button from "./components/Button";
import { Icon } from "react-native-elements";
import { t } from "react-native-tailwindcss";

function SettingsScreen({ navigation }) {
    return (
        <SafeAreaView style={[t.flex, t.justifyCenter, t.itemsCenter]}>
            <View style={[t.selfStart, t.mT8, t.mL6, t.z10]}>
                <TouchableOpacity
                    style={[t.bgGray300, t.w14, t.h14, t.roundedFull, t.absolute, t.opacity70, t.itemsCenter, t.flex, t.justifyCenter]}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name='arrow-back-outline'
                        type='ionicon'
                        color='#000'
                    />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[t.mT12, t.selfStart]}>
                    <Text style={[styles.header, t.text3xl]}>Settings</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.subHeader}>Account</Text>
                    <Button text="Set Two-Factor Authentication" icon="lock-closed-outline" />
                    <Button text="Language" icon="language-outline" />
                    <Button text="Font Size" icon="text-outline" />
                </View>

                <View style={styles.container}>
                    <Text style={styles.subHeader}>Notifications</Text>
                    <Button text="Notification Settings" icon="notifications-circle-outline" />
                </View>

                <View style={styles.container}>
                    <Text style={styles.subHeader}>About</Text>
                    <Button text="Terms of Use" icon="newspaper-outline" />
                    <Button text="Privacy Policy" icon="shield-checkmark-outline" />
                    <Button text="Report a problem" icon="alert-circle-outline" />
                </View>

                <View style={[styles.container, t.mT3, t.mB10]}>
                    <Button text="Logout" icon="exit-outline" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        fontFamily: "Poppins-Bold",
        marginLeft: 3,
    },
    subHeader: {
        fontFamily: "Poppins-SemiBold",
        marginBottom: 10,
        marginTop: 17,
        color: '#888899',
        marginLeft: 3,
    },
    container: {
        width: "80%"
    },
    text: {
        color: '#9999AA',
        fontFamily: 'Poppins-Normal'
    },
    individualRow: {
        height: 54,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 14,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        paddingHorizontal: 20
    }
});

export default SettingsScreen;