import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import React from 'react';

import Repos from '../screens/Repos';
import RepoDetails from '../screens/RepoDetails';
import Users from '../screens/Users';
import SideMenu from '../components/SideMenu';


    const Routes = createDrawerNavigator({

        Repos: {
            screen: Repos
        },
        RepoDetails: {
            screen: RepoDetails,
            navigationOptions: ({navigation}) => ({
            drawerLockMode: 'locked-closed'
          })
        },
        Users: {
            screen: Users,
            navigationOptions: ({navigation}) => ({
            drawerLockMode: 'locked-closed'
          })
        }

    }, {
            contentComponent: SideMenu
        });

export default Routes;
