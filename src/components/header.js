import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import colors from '../config/colors';


const Header = () => (
    <View style={styles.container}>
        <Image
            source={require('../assets/img/logo.png')}
            style={styles.img}
            resizeMode="contain"
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingTop: 35,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary
    },
    img: { width: 100, padding: 5 }

});

export default Header;