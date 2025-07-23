import { StyleSheet, Text, View } from 'react-native';

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
    backgroundColor: 'black',
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  countText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 600
  },
  countTitle: {
    color: 'white',
    fontSize: 17
  },
  innerContainer: {
    alignItems: 'center'
  },
    semiCircle: {
    width: 150,
    height: 75,
    backgroundColor: 'transparent',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderWidth: 6,
    borderLeftColor: 'yellow',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderBottomWidth: 0,
    position: 'absolute',
    bottom: 0,
  },
});
