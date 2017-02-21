'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { TabBar } from '../navigationConfiguration'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    appNav: state.tabBar,
  }
}

class TabBarNavigation extends React.Component {

  render(){
    const { dispatch, appNav, dailyMoments } = this.props

    return (
      <TabBar
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: appNav,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(TabBarNavigation)
