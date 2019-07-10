import React from 'react';
import { StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'


const Header = () => (
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#4DD2D2', '#092331']}
        style={styles.container}
    >
        <Image source={require('../assets/img/logo.png')} />
    </LinearGradient>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 60
    },

});

export default Header;