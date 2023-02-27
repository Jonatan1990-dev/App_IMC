import React from "react";
import { View,
         Text,
         TouchableOpacity,
         Share
        } from "react-native";
import styles from "./style"

export default function ResultImc(props){
   
    const onShere = async () => {
        const result = await Share.share({
            message : "Meu IMC é : " + props.ResultImc,
        })
    }


    return(
        <View style={styles.ResultImc}>
            <View style={styles.boxSharebutton}>
                {props.ResultImc != null ?
                <TouchableOpacity 
                    onPress={onShere}
                    style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
                :
                <View/>
                }

            </View>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.ResultImc}</Text> 
        </View>
    );
}