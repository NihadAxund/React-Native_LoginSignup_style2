import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function GoBack({ title, onPress }) {
    return (
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    btn: {

        backgroundColor: '#6C3483',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20, 
        marginTop: 30,
        opacity:0.6
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: "bold"
    },
});
