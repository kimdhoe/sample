'use strict'
// React
import React from 'react'
import { AppRegistry } from 'react-native'
// Redux
import { Provider } from 'react-redux'
import store from './app/store'
// Navigation
import RootNav from './app/RootNav'

class SampleNavigation extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <RootNav />
      </Provider>
    )
  }
}
AppRegistry.registerComponent('SampleNavigation', () => SampleNavigation)
