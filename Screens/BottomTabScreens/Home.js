import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import TopTabNavigator from '../../Navigation/TopTabNavigator';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={[styles.container,{paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0 }]}>
        <Header navigation={navigation} />
        <View style={styles.main}>
           <TopTabNavigator/>
        </View>
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    main:{
      flex:1,
      padding:10,
    }
})