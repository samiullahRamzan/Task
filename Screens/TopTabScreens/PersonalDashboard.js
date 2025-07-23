import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import clockImage from '../../assets/images/clock.png'
import Calender from '../../components/Calender'
import CaleriesStatusBox from '../../components/CaleriesStatusBox'
import HealthFact from '../../components/HealthFact'
import QuickAction from '../../components/QuickAction'
import VerticalBox from '../../components/VerticalBox'
import Colors from '../../constants/Colors'
import Icons from '../../constants/Icons'

const PersonalDashboard = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <Calender/>
      <HealthFact/>
      <View style={styles.container}>
        <CaleriesStatusBox />
        <View style={styles.containerView}>
          <VerticalBox title="Steps" circleStyle="1" circleCount="1769" circleTitle="Out of 10,000" position="left" customicon={Icons.Steps({size:40,color:"blue"})} />
          <VerticalBox title="Water" circleStyle="2" circleCount="500ml" circleTitle="Out of 2L" position="right" customicon={Icons.Water({size:40,color:"blue"})} />
        </View>
      </View>
      <View style={styles.quickAction}>
        <Text style={styles.actionHeading}>Quick Action</Text>
        <Pressable style={styles.addAction}>
            {Icons.Plus({size:15,color:'white'})}
            <Text style={styles.txt}>Add Action</Text>
        </Pressable>
      </View>
      <QuickAction image={clockImage} heading='TrimmKitchen' subHeading='Cuturally insptred, Nutritionally balanced.From your kithchen to your Goals' />
      <QuickAction image={clockImage} heading='TrimmKitchen' subHeading='Cuturally insptred, Nutritionally balanced.From your kithchen to your Goals' />
      <QuickAction image={clockImage} heading='TrimmKitchen' subHeading='Cuturally insptred, Nutritionally balanced.From your kithchen to your Goals' />

    </ScrollView>
  )
}

export default PersonalDashboard

const styles = StyleSheet.create({
    quickAction:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    actionHeading:{
        fontFamily:'Poppins_700Bold',
        fontSize:20
    },
    txt:{color:"white",fontSize:10},
    addAction:{
        backgroundColor:Colors.statusBar1,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:16,
        paddingLeft:4,
        paddingRight:4
    },
     container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  }
})