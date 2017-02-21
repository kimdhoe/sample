import { StackNavigator } from 'react-navigation'

// Screens
import TabOneScreenOne from './views/TabOneScreenOne'
import TabOneScreenTwo from './views/TabOneScreenTwo'

const routeConfiguration = {
  TabOneScreenOne: { screen: TabOneScreenOne },
  TabOneScreenTwo: { screen: TabOneScreenTwo },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'TabOneScreenOne'
}

const DailyMomentsNav = StackNavigator(routeConfiguration,stackNavigatorConfiguration)

export default DailyMomentsNav
