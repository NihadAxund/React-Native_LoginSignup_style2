import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function SignupBtn({ title = 'Sign up', onPress }) {
    return (
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    btn: {

        backgroundColor: 'white',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20, 
        marginTop: 30,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: "bold"
    },
});
