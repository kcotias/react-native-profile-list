import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactScreen = () => (
    <View style={styles.container}>
        <Text>Nada para exibir</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default ContactScreen;