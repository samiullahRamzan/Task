import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import Icons from '../constants/Icons';
import Chat from '../Screens/BottomTabScreens/Chat';
import Home from '../Screens/BottomTabScreens/Home';
import Profile from '../Screens/BottomTabScreens/Profile';
import Statistics from '../Screens/BottomTabScreens/Statistics';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{
    headerShown: false,
    tabBarActiveTintColor:'#68B9CB',   // Active icon/text color
    tabBarInactiveTintColor: '#717170',    // Inactive icon/text color
    tabBarStyle: {
      backgroundColor: Colors.tabbgColor,
      paddingTop: 5,
      height: 120,
    },
  }}>
    <Tab.Screen name="Home" component={Home}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon:  ({ color, size }) => Icons.Grid({ size, color }),
        tabBarLabelStyle: {
          fontFamily: 'Poppins_500Medium',
          fontSize: 12,
        },
      }}  
    />
    <Tab.Screen name="Statistics" component={Statistics}
      options={{
        tabBarLabel: 'Statistic',
        tabBarIcon:  ({ color, size }) => Icons.Stats({ size, color }),
        tabBarLabelStyle: {
          fontFamily: 'Poppins_500Medium',
          fontSize: 12,
        },
      }}  
    />
    <Tab.Screen name="Chat" component={Chat}
      options={{
        tabBarLabel: 'Chat',
        tabBarIcon:  ({ color, size }) => Icons.Chat({ size, color }),
        tabBarLabelStyle: {
          fontFamily: 'Poppins_500Medium',
          fontSize: 12,
        },
      }}  
    />
    <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon:  ({ color, size }) => Icons.Profile({ size, color }),
        tabBarLabelStyle: {
          fontFamily: 'Poppins_500Medium',
          fontSize: 12,
        },
      }}  
    />
  </Tab.Navigator>
);

export default TabNavigator;
