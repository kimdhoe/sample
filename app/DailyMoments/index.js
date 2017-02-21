import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

import DailyMomentsNav from './DailyMomentsNav'

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
    console.log(dailyMoments)
    return (
      <DailyMomentsNav
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
        dailyMoments={dailyMoments}
      />
    )
  }
}
export default connect(mapStateToProps)(TabOneNavigation)
