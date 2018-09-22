import React, { Component } from 'react'

import { Container } from './styles';

import StatusBar from '../../components/StatusBar';
import ToolBar from '../../components/ToolBar';

export default class Users extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const { goBack } = this.props.navigation;
    return (
     <Container>
      <StatusBar/>
      <ToolBar
        title="Usuários" 
        goBack={goBack}/>
     </Container>
    )
  }
}