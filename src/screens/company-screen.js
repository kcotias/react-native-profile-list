import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../components/header';
import LIST_DATA from '../utils/constants';
import ListCard from '../components/list-card';



class CompanyScreen extends Component {

    render() {
        const _renderItem = (item, index) => (
            <ListCard
                nome={item.nome}
                cargo={item.cargo}
                foto={item.foto}
                onPress={() => handlePress(item)}
                index={index}
            />
        );

        const handlePress = (item) => {
            this.props.navigation.navigate('PROFILE',
                {
                    nome: item.nome,
                    cargo: item.cargo,
                    foto: item.foto, idade:
                        item.idade
                });
        }

        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    style={styles.flatlist}
                    data={LIST_DATA}
                    renderItem={({ item, index }) => _renderItem(item, index)}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatlist: { paddingHorizontal: 20, marginTop: 10 }

});

export default CompanyScreen;