
import React, { Component } from 'react';
import Routes from './src/routes';

import './src/config/reactotronConfig';

 class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default console.tron.overlay(App);