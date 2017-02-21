import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import Root from './Root'

const mapStateToProps = (state) => {
  return {
    rootNav: state.rootNav,
  }
}

class _RootNav extends React.Component {

  render(){
    const { dispatch, rootNav, dailyMoments } = this.props

    return (
      <Root
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: rootNav,
          })
        }
      />
    )
  }
}

const RootNav = connect(mapStateToProps)(_RootNav)

export default RootNav

// 이걸 인덱스index로?
