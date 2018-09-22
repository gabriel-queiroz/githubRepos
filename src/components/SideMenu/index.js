import React, { Component } from 'react';
import { Menu, MenuItem, MenuItemText  } from './styles';
import {NavigationActions} from 'react-navigation';


export default class SideMenu extends Component {

  constructor(props){
      super(props);
  }  

  handleNavigateScreen(route){
      const navigateAction = NavigationActions.navigate({
        routeName: route
      });
      this.props.navigation.dispatch(navigateAction); 
  }

  render() {
    return (
      <Menu>
          <MenuItem onPress={() => this.handleNavigateScreen('Repos') } ><MenuItemText>Repositórios</MenuItemText></MenuItem>
          <MenuItem onPress={() => this.handleNavigateScreen('Users') } ><MenuItemText> Usuários</MenuItemText></MenuItem>
      </Menu>
    )
  }
}
