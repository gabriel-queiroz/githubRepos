import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import React from 'react';
import { View, Text } from 'react-native';
import Repos from '../screens/Repos';
import RepoDetails from '../screens/RepoDetails';

const Routes = createDrawerNavigator({

    Repos: {
        screen: Repos
    },
    RepoDetails: {
        screen: RepoDetails
    }

}, {
        contentComponent: (props) => (
            <View>
                <Text>Menu Header</Text>
                <DrawerItems {...props} />
            </View >
        )
    });

export default Routes;