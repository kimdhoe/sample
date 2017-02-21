import { TabNavigator } from 'react-navigation'

import routes from './routes'

const tabBarConfiguration = {
  //...other configs
  tabBarOptions:{
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
    // background color is for the tab component
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
  }
}

export const TabBar = TabNavigator(routes,tabBarConfiguration)

// 이걸 인덱스index로?
