import React from 'react';
import { StyleSheet, Image, View, Platform } from 'react-native';
import colors from '../config/colors';


const Header = () => (
    <View style={[styles.container, { paddingTop: Platform.OS === 'ios' ? 35 : 0 }]}>
        <Image
            source={require('../assets/img/logo.png')}
            style={styles.img}
            resizeMode="contain"
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        shadowColor: 'gray',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 3,
            width: 3
        },
        shadowRadius: 3,
        elevation: 6,
    },
    img: { width: 100, padding: 5 }

});

export default Header;