import { combineReducers } from 'redux'

import { NavigatorTabOne } from '../tabOne/navigationConfiguration'
import { NavigatorTabTwo } from '../tabTwo/navigationConfiguration'
import { NavigatorTabThree } from '../tabThree/navigationConfiguration'
import Root from '../RootNav/Root'
import dailyMoments from './dailyMoments'

const reducer = combineReducers({
  dailyMoments,

  rootNav: (state, action) => {
    if (action.type === 'JUMP_TO_TAB')
      return { ...state, index:0 }

    return Root.router.getStateForAction(action,state)
  },

  tabOne: (state, action) => NavigatorTabOne.router.getStateForAction(action,state),
  tabTwo: (state, action) => NavigatorTabTwo.router.getStateForAction(action,state),
  tabThree: (state, action) => NavigatorTabThree.router.getStateForAction(action,state),
})

export default reducer
