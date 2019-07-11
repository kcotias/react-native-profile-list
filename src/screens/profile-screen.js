import React from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import colors from '../config/colors';


const ProfileScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={{ marginTop: 10, alignSelf: 'center', fontWeight: 'bold', color: colors.font, fontSize: 20 }}>Perfil</Text>
        <View style={{
            marginHorizontal: 20,
            marginTop: 20,
            paddingVertical: 40,
            shadowColor: 'gray',
            shadowOpacity: 0.5,
            shadowOffset: {
                height: 3,
                width: 3
            },
            shadowRadius: 4,
            elevation: 4,
            backgroundColor: 'white',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <Image style={{ marginBottom: 10 }} source={navigation.state.params.foto} />
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={styles.prefix}>NOME:</Text>
                <Text style={styles.content}>{navigation.state.params.nome}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={styles.prefix}>CARGO:</Text>
                <Text style={styles.content}>{navigation.state.params.cargo}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={styles.prefix}>IDADE:</Text>
                <Text style={styles.content}>{navigation.state.params.idade}</Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: Platform.OS === 'ios' ? 35 : 0,
    },
    prefix: {
        fontWeight: '300',
        color: colors.font,
        marginRight: 5
    },
    content: {
        fontWeight: '600',
        color: colors.font
    }

});

export default ProfileScreen;