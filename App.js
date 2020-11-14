import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Import the HomeScreen Components here
import HomeScreen from "./src/screens/HomeScreen";
//Import the custom file path here 
import ComponentScreen from './src/screens/Conponents';
//Import the List Screen here
import ListScreen from './src/screens/ListScreen';
//Image Screen
import ImageScreen from './src/screens/ImageScreen';
//Import Counter Screen 
import CounterScreen from './src/screens/CounterScreen';
//Import Color Screen
import ColorScreen from './src/screens/ColorScreen';
//Import Square Screen
import SquareScreen from './src/screens/SquareScreen';
//IMport Text Screen
import TextScreen from './src/screens/textScreen';
//Import the Box Screen
import BoxScreen from './src/screens/BoxScreen'
//Import the Search Screen
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    ImageScreen : ImageScreen,
    CounterScreen : CounterScreen,
    Color : ColorScreen,
    Square : SquareScreen,
    TScreen : TextScreen,
    BScreen : BoxScreen,
    Search: SearchScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);


export default createAppContainer(navigator);
