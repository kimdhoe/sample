// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabOne } from '../navigationConfiguration'

// Redux
import { connect } from 'react-redux'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'


const mapStateToProps = (state) => {
  return {
    navigationState: state.tabOne,
    dailyMoments: state.dailyMoments
  }
}

class TabOneNavigation extends React.Component {
  static navigationOptions = {
    tabBar:{
      label: 'Tab One',
      icon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
    }
  }

  render(){
    const { navigationState, dispatch, dailyMoments } = this.props
    // console.log('Daily Moments', dailyMoments)
    console.log(this.props)
    return (
      <NavigatorTabOne
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}
export default connect(mapStateToProps)(TabOneNavigation)
