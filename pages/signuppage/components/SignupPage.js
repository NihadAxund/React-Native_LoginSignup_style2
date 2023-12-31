import React, { useState } from 'react';
import { Alert, Modal, Pressable, Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import TextUserName from '../../components/TextUserName';
import TextPassword from '../../components/TextPassword';
import { Video } from 'expo-av';
import LoginBtn from '../../loginpage/components/LoginBtn';
import SignupBtn from '../../loginpage/components/SignupBtn';

export default function SignupPage({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    const ModalVisibleChange = () => {
        setModalVisible(!modalVisible);
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {!videoLoaded && (
                // Yükleme ekranı
                <View style={styles.loadingContainer}>
                    <Text>Loading...</Text>
                </View>
            )}
            <Video
                source={require('../../icons/vid2.mp4')}
                rate={0.8}
                volume={0}
                isMuted={false}
                resizeMode='cover'
                shouldPlay
                isLooping
                style={StyleSheet.absoluteFillObject}
                onLoad={() => {
                    setVideoLoaded(true);
                }}
            />
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <View style={styles.container1}>
                <LoginBtn title={'Go Back'} onPress={() => navigation.navigate('LoginPage')} />
            </View>

            <View style={styles.container2}>
                <View style={styles.flcontainer2}>
                    <TextUserName />
                    <TextPassword />
                    <TextPassword />
                    <SignupBtn title={'Sign Up'} onPress={() => navigation.navigate('SignupPage')} />
                </View>
            </View>
            <View style={styles.container3}></View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container1: {
        width: '100%',
        height: '25%',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 20,
        paddingTop: 25,
        opacity:0.7
    },
    container2: {
        width: '100%',
        height: '45%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    flcontainer2:{
        backgroundColor: 'white',
        padding: 30,    
        margin: 10,
        borderRadius: 15,
        opacity: 0.6
    },
    container3: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
