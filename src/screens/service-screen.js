import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../components/header';
import LIST_DATA from '../utils/constants';
import ListCard from '../components/list-card';
import ContentCard from '../components/content-card';

const ServiceScreen = () => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [idade, setIdade] = useState('');
    const [foto, setFoto] = useState('');

    const _renderItem = (item, index) => (
        <ListCard
            nome={item.nome}
            cargo={item.cargo}
            foto={item.foto}
            onPress={() => {
                setNome(item.nome);
                setCargo(item.cargo);
                setIdade(item.idade);
                setFoto(item.foto);
            }}
            index={index}
        />
    );

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Header />
                <ContentCard
                    nome={nome}
                    cargo={cargo}
                    idade={idade}
                    foto={foto}
                />
            </View>
            <View style={{ flex: 2 }}>
                <FlatList
                    style={styles.flatlist}
                    data={LIST_DATA}
                    renderItem={({ item, index }) => _renderItem(item, index)}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatlist: {
        paddingHorizontal: 20,
    }
});

export default ServiceScreen;