import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function LoginBtn({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.buttonText}  onPress={onPress}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'white',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20, 
        marginTop: 20,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: "bold"
    },
});
