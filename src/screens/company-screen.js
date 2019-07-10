import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../components/header';
import LIST_DATA from '../utils/constants';
import ListCard from '../components/list-card';



const CompanyScreen = (props) => {

    const _renderItem = (item) => (
        <ListCard
            nome={item.nome}
            cargo={item.cargo}
            onPress={handlePress(item)}
        />
    );

    const handlePress = (item, props) => {
        // props.navigation.navigate('Profile');
    }

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={LIST_DATA}
                renderItem={(item) => _renderItem(item, props)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});

export default CompanyScreen;