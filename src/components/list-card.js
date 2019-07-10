import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import colors from '../config/colors';


const ListCard = (props) => (
    <TouchableOpacity 
        style={styles.container}
        onPress={props.onPress}
    >
        <View style={styles.imgWrapper}>
            <ImageBackground
                source={require('../assets/img/Clip.png')}
                resizeMode="contain"
                style={styles.img}
            >
                <View style={styles.sticker}>
                    <Text style={styles.stickerLabel}>{props.index}</Text>
                </View>
            </ImageBackground>

        </View>
        <View style={{ marginLeft: 15 }}>
            <Text style={styles.name}>{props.nome}</Text>
            <Text style={styles.role}>{props.cargo}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginBottom: 25,
        shadowColor: 'gray',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowRadius: 3,
        elevation: 3,
    },
    img: { 
        height: 80, 
        width: 80, 
        alignItems: 'flex-end' 
    },
    sticker: { 
        height: 22, 
        width: 22, 
        borderRadius: 20, 
        backgroundColor: colors.secondary, 
        marginTop: 2, 
        marginRight: 2, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    stickerLabel: {
        color: colors.primary, 
        fontWeight: '700', 
        fontSize: 12
    },
    name: { 
        fontWeight: 'bold', 
        color: colors.font 
    },
    role: { 
        fontWeight: '300', 
        color: colors.font, 
        fontSize: 12 
    },
    imgWrapper: { 
        justifyContent: 'center', 
        alignItems: 'center' 
    }

});

export default ListCard;