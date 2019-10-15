import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Main from '../components/index';
import Setting from '../components/Setting';
const MainNavigator = createStackNavigator({
  Main: {screen: Main},
  Setting: {screen: Setting},
});
const AppNavigator = createAppContainer(MainNavigator);
export default AppNavigator;