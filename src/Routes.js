import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import colors from './config/colors';
import { CompanyScreen, ContactScreen, ServiceScreen } from './screens';

const adminTab = createBottomTabNavigator({
    Empresa: CompanyScreen,
    Serviço: ServiceScreen,
    Contato: ContactScreen,
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Empresa') {
                    iconName = `home${focused ? '' : '-outline'}`;
                } else if (routeName === 'Serviço') {
                    iconName = `account${focused ? '' : '-outline'}`;
                } else if (routeName === 'Contato') {
                    iconName = `help-circle${focused ? '' : '-outline'}`;
                }

                return (
                    <MaterialCommunityIcons
                        name={iconName}
                        size={horizontal ? 20 : 25}
                        color={tintColor} />
                );
            }
        }),
        tabBarOptions: {
            activeTintColor: colors.secondary,
            inactiveTintColor: '#fff',
            style: { backgroundColor: colors.primary, paddingTop: 5 }
        }
    });

adminTab.navigationOptions = {
    // Hide the header from AppNavigator stack
    header: null
};

const Routes = createSwitchNavigator({
    HOME: {
        screen: adminTab, navigationOptions: () => ({
            header: null,
        }),
    },
}
);

const App = createAppContainer(Routes);

export default App;
