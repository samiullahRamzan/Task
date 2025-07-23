import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'

const QuickAction = (props) => {
   
  return (
    <View style={styles.action}>
      <Image source={props.image} style={styles.image} />
      <View>
        <Text style={styles.mealPlan}>Meal Plan</Text>
        <Text style={styles.heading}>{props.heading}</Text>
        <Text style={styles.subHeading}>{props.subHeading}</Text>
      </View>
      <Pressable style={styles.btn}>
        <Text style={styles.plan}>Start your plan</Text>
      </Pressable>
    </View>
  )
}

export default QuickAction

const styles = StyleSheet.create({
    action:{
        marginTop:10,
        flexDirection:'row',
        backgroundColor:Colors.action,
        borderWidth:1,
        borderColor:Colors.actionBorder,
        borderRadius:15,
        padding:10,
        alignItems:'center'
    },
    image:{
        width:50,
        height:50,
        marginLeft:5,
        marginRight:5,
        // backgroundColor:'orange',
        resizeMode:'contain'
    },
    mealPlan:{
        fontSize:10
    },
    heading:{
        fontFamily:'Poppins_700Bold'
    },
    subHeading:{
        fontFamily:'Poppins_400Regular',
        width:'42%',
        fontSize:10
    },
    btn:{position:'absolute',right:7,bottom:20,backgroundColor:'#8D52FB',padding:5,borderRadius:10},
    plan:{color:'white',fontFamily:'Poppins_400Regular',fontSize:10}
})