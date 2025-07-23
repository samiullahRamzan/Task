import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import Icons from '../constants/Icons';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>

      <Pressable onPress={()=> navigation.openDrawer()}>
        {Icons.Menu({ size: 30, color: 'white' })}
      </Pressable> 

      <View style={styles.heading}>
        <Text style={styles.First}>DOCTRIMM</Text>
        <Text style={styles.Second}>ttt</Text>
      </View>

      <View style={styles.icons}>
         {Icons.Bell({ size: 22, color: 'white' })}
         {Icons.Profile({ size: 22, color: 'white' })}
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
      padding:20,
      backgroundColor:Colors.statusBar1,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    heading:{
      alignItems:'center',
    },
    First:{
        color:'white',
        fontFamily:'Poppins_500Medium',
        fontSize:15
    },
    Second:{
        color:'white',
        fontFamily:'Poppins_400Regular',
        fontSize:12
    },
    icons:{
        flexDirection:'row',
        gap:10
    }
    
})