import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';

const ContentCard = (props) => {

    return (
        <View
            style={styles.container}
        >
            <View style={styles.imgWrapper}>
                <Image
                    source={props.foto}
                    resizeMode="contain"
                    style={styles.img}
                />
            </View>
            <View style={{ marginLeft: 15 }}>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={styles.prefix}>NOME:</Text>
                    <Text style={styles.content}>{props.nome}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={styles.prefix}>CARGO:</Text>
                    <Text style={styles.content}>{props.cargo}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={styles.prefix}>IDADE:</Text>
                    <Text style={styles.content}>{props.idade}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginBottom: 10,
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
    prefix: {
        fontWeight: '300',
        color: colors.font,
        marginRight: 5
    },
    content: {
        fontWeight: '600',
        color: colors.font
    },
    imgWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ContentCard;