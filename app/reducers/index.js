import { combineReducers } from 'redux'

import { NavigatorTabOne } from '../tabOne/navigationConfiguration'
import { NavigatorTabTwo } from '../tabTwo/navigationConfiguration'
import { NavigatorTabThree } from '../tabThree/navigationConfiguration'
import { TabBar } from '../tabBar/navigationConfiguration'
import dailyMoments from './dailyMoments'

const reducer = combineReducers({
  dailyMoments,

  tabBar: (state, action) => {
    if (action.type === 'JUMP_TO_TAB')
      return { ...state, index:0 }

    return TabBar.router.getStateForAction(action,state)
  },

  tabOne: (state, action) => NavigatorTabOne.router.getStateForAction(action,state),
  tabTwo: (state, action) => NavigatorTabTwo.router.getStateForAction(action,state),
  tabThree: (state, action) => NavigatorTabThree.router.getStateForAction(action,state),
})

export default reducer
