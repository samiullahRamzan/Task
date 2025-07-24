import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import Setting from '../Screens/DrawerScreens/Setting';
import TabNavigator from './BottomTabNaviagtor';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
 <View style={{flex:1}}>
   <Drawer.Navigator screenOptions={{headerShown:false}}>
    <Drawer.Screen name="Tabs" component={TabNavigator} options={{ title: 'Home' }} />
    <Drawer.Screen name="Setting" component={Setting}/>
  </Drawer.Navigator>
 </View>
);

export default DrawerNavigator;
