import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import DrawerNavigator from '../Navigation/DrawerNavigator';

export default function App() {
   const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
        <DrawerNavigator/>
    </NavigationContainer>
  )
}

