import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

export default function CaleriesStatusBox() {
  return (
    <View style={styles.container}>
    
      <View style={styles.innerContainer}>
        <Text style={styles.countText}>331</Text>
        <Text style={styles.countTitle}>Remaining</Text>
      </View>
      <View style={styles.innerContainer}>
      <View style={styles.semiCircle}></View>
        <Text style={styles.countText}>1769</Text>
        <Text style={styles.countTitle}>Out of 2000</Text>
      </View>
      <View style={styles.innerContainer}>      
        <Text style={styles.countText}>267</Text>
        <Text style={styles.countTitle}>Burned</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.statusBar1,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop:10
  },
  countText: {
    color: 'white',
    fontSize: 20,
    fontFamily:'Poppins_700Bold'
  },
  countTitle: {
    color: 'white',
    fontSize: 15,
    fontFamily:'Poppins_400Regular'
  },
  innerContainer: {
    alignItems: 'center'
  },
  semiCircle: {
    width: 140,
    height: 70,
    backgroundColor: 'transparent',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderWidth: 6,
    borderLeftColor: 'yellow',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderBottomWidth: 0,
    position: 'absolute',
    bottom: 10,
    // transform: [{ rotate: '-30deg' }],
  },
});
