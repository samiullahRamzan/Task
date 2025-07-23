import { createDrawerNavigator } from '@react-navigation/drawer';
import Setting from '../Screens/DrawerScreens/Setting';
import TabNavigator from './BottomTabNaviagtor';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator screenOptions={{headerShown:false}}>
    <Drawer.Screen name="Tabs" component={TabNavigator} options={{ title: 'Home' }} />
    <Drawer.Screen name="Setting" component={Setting}/>
  </Drawer.Navigator>
);

export default DrawerNavigator;
