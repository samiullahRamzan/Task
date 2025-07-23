import { Image, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import Icons from '../constants/Icons'

const HealthFact = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/bulb.png')} style={styles.img} />
      <View style={styles.txt}>
        <Text style={styles.first}>Health Fact of the day</Text>
        <Text style={styles.second}>Running for 30 mins, 5 times a week can reduce biological aging by 9 years.</Text>
      </View>
      <View style={styles.icon}>
        {Icons.Cross({size:20,color:'white'})}
      </View>
    </View>
  )
}

export default HealthFact

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.statusBar1,
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        padding:10
    },
    img:{
        width:100,
        height:100
    },
    txt:{
       width:'60%',
    },
    first:{
        color:'white',
        fontFamily:'Poppins_700Bold'
    },
    second:{
        color:'white',
        fontFamily:'Poppins_400Regular',
        
    },
    icon:{
        position:'absolute',
        top:5,
        right:2,
    }
})