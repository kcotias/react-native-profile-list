import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ListCard = (props) => (
    <View style={styles.container}>
        <View>

        </View>
        <View>
            <Text>{props.nome}</Text>
            <Text>{props.cargo}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },

});

export default ListCard;