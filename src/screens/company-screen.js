import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/header';


const CompanyScreen = (props) => (
    <View>
        <Header />
        <Text> CompanyScreen</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});

export default CompanyScreen;