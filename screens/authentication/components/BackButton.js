import React from "react";
import { TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";

function BackButton(props) {
    const navigation = useNavigation();

    return (
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
    )
};

export default BackButton;