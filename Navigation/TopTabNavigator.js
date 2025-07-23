import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import PersonalDashboard from '../Screens/TopTabScreens/PersonalDashboard';
import ProgressDashboard from '../Screens/TopTabScreens/ProgressDashboard';
import Colors from '../constants/Colors';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
        tabBarStyle: {
            backgroundColor:Colors.statusBar1,
            borderRadius: 10,
            elevation: 5,
            marginBottom:10
        },
        tabBarIndicatorStyle: {
            backgroundColor: '#FFFFFF',
            height: '80%',
            width:'46%',
            borderRadius: 10,
            margin:5,
            elevation: 5,
        },
        tabBarInactiveTintColor:'white',
        tabBarLabelStyle: {
            fontWeight: 'bold',
            textTransform: 'none',
        },
        
        }}
    >
        <Tab.Screen name="Personal Dashboard" component={PersonalDashboard} />
        <Tab.Screen name="Personal Progress" component={ProgressDashboard} />

    </Tab.Navigator>
  )
}

export default TopTabNavigator

const styles = StyleSheet.create({})