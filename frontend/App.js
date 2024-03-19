import "react-native-gesture-handler";
import { Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./Components/screens/HomeScreen";
import HelpOthers from "./Components/screens/HelpOthers";
import GetHelpScreen from "./Components/screens/GetHelpScreen";
import ChatScreen from "./Components/screens/ChatScreen";
import Profile from "./Components/screens/Profile";
import NotificationScreen from "./Components/screens/NotificationScreen";

import HomeSvg from "./assets/svg/Home.svg";
import MessageSvg from "./assets/svg/Messages.svg";
import NotificationSvg from "./assets/svg/Notification-bell.svg";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      activeTintColor: "blue", // Color for active tab
      inactiveTintColor: "gray", // Color for inactive tab
      showLabel: false, // Hide labels
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <View style={{ alignItems: "center" }}>
            <HomeSvg
              width={size}
              height={size}
              fill={focused ? "blue" : "gray"}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <View style={{ alignItems: "center" }}>
            <NotificationSvg
              width={size}
              height={size}
              fill={focused ? "blue" : "gray"}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <View style={{ alignItems: "center" }}>
            <MessageSvg
              width={size}
              height={size}
              fill={focused ? "blue" : "gray"}
            />
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Notifications"
      component={NotificationScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="HelpOthers"
      component={HelpOthers}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="GetHelpScreen"
      component={GetHelpScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);

export default App;
