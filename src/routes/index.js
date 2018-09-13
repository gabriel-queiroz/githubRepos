import { createStackNavigator } from 'react-navigation';

import Repos from '../screens/Repos';
import RepoDetails from '../screens/RepoDetails';

const Routes = createStackNavigator({

    Repos: {
        screen: Repos
    },
    RepoDetails:{
        screen: RepoDetails
    }

}, {
    initialRouteName:'Repos',
    headerMode: 'none'
    });

export default Routes;