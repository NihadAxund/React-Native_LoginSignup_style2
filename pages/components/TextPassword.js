import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function TextPassword() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        placeholderTextColor="#ccc"
        secureTextEntry={!showPassword}
        onChangeText={(value) => setPassword(value)}
      />
      <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
        <Image
          source={showPassword ? require('../icons/view.png') : require('../icons/hide.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
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
    overflow:'hidden'
  },
  input: {
    flex: 1,
    color: '#fff',
  },
  iconContainer: {
    padding: 10,
    paddingLeft:5,
    marginTop:3,
    marginBottom:3,
    marginRight:1,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    margin:'auto'
  },
});
