import 'react-native-gesture-handler';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './Components/screens/HomeScreen';
import HelpOthers from './Components/screens/HelpOthers';
import GetHelpScreen from './Components/screens/GetHelpScreen';
import ChatScreen from './Components/screens/ChatScreen';
import Profile from './Components/screens/Profile';
import NotificationScreen from './Components/screens/NotificationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="HelpOthers" component={HelpOthers} />
        <Stack.Screen name="GetHelpScreen" component={GetHelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    
    
  );
}


