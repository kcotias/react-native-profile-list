import React from 'react';
import { StyleSheet, Image, View, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../config/colors';


const Header = () => (
    <View style={styles.shadow}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.secondary, colors.primary]} style={[styles.container, { paddingTop: Platform.OS === 'ios' ? 35 : 0 }]}>
            <Image
                source={require('../assets/img/logo.png')}
                style={styles.img}
                resizeMode="contain"
            />
        </LinearGradient>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: { width: 100, padding: 5 },
    shadow: {
        shadowColor: 'gray',
        shadowOpacity: 0.7,
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowRadius: 6,
        elevation: 4,
    }

});

export default Header;