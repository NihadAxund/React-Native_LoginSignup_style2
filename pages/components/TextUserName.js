import React, { useEffect, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function TextUserName() {
  const usernameRef = useRef('');

  const handleUsernameChange = (value) => {
    // Perform any additional logic you may need
    console.log('Username changed:', value);
  };


  return (
    <View style={styles.container}>
      <TextInput
        ref={usernameRef}
        style={styles.input}
        placeholder="Type here..."
        placeholderTextColor="#ccc"
        onChangeText={handleUsernameChange}
      />
      <View style={styles.iconContainer}>
        <Image
          source={require('../icons/user.png')}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    height: 45,
    width: 270,
    backgroundColor: '#585B5C',
    paddingLeft: 10,
    marginVertical: 10,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    color: '#fff',
  },
  iconContainer: {
    padding: 10,
    paddingLeft: 5,
    marginTop: 3,
    marginBottom: 3,
    marginRight: 1,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    margin: 'auto',
  },
});
