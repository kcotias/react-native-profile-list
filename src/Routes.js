import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import colors from './config/colors';
import { CompanyScreen, ContactScreen, ServiceScreen, ProfileScreen } from './screens';

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
            activeTintColor: colors.primary,
            inactiveTintColor: 'gray',
            style: { paddingTop: 5 }
        }
    });

adminTab.navigationOptions = {
    header: null
};

const Routes = createStackNavigator({
    HOME: {
        screen: adminTab, navigationOptions: () => ({
            header: null,
        })
    },
    PROFILE: {
        screen: ProfileScreen, navigationOptions: () => ({
            header: null,
        })
    }
}
);

const App = createAppContainer(Routes);

export default App;
