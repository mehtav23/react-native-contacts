import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";
import AddNewScreen from "./src/Screens/AddNewScreen";
import ContactDetailScreen from "./src/Screens/ContactDetailScreen";
import UpdateScreen from "./src/Screens/UpdateScreen";
import {Text, TextInput} from 'react-native';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    AddNew: AddNewScreen,
    Details: ContactDetailScreen,
    Update: UpdateScreen
  }, {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: ''
    }
  }
)

    
    
if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}

let Navigation = createAppContainer(navigator);


const App = () =>{
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;

