import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

export default function VerticalBox({title, icon, circleStyle, circleCount, circleTitle, position,customicon}) {
  return (
    <View style={styles.container}>
      {customicon}
      <View>
        <Text style={styles.boxTitle}>{title}</Text>
      </View>
        { circleStyle === "1" &&      <View style={[
          styles.circle1MainView,
          position === "left" ? styles.leftRadius : styles.rightRadius
        ]}>
        <View style={{position: 'absolute', zIndex: 9999, alignItems: 'center'}}>
          <Text style={styles.circleCountText}>{circleCount}</Text>
          <Text style={styles.circleCountTitle}>{circleTitle}</Text>
        </View>
        <View style={styles.circle1Main}>
        </View>
      </View>}
{ circleStyle === "2" &&      <View style={styles.circle1MainView2}>
        <View style={{position: 'absolute', zIndex: 9999, alignItems: 'center'}}>
          <Text style={styles.circleCountText}>{circleCount}</Text>
          <Text style={styles.circleCountTitle}>{circleTitle}</Text>
        </View>
        
        <View style={styles.circle1Main2}>
        <View style={styles.semiCircle}></View>
        </View>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.49,
    backgroundColor: Colors.statusBar1,
    alignItems: 'center',
    gap: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  boxTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 600
  },
  circle1Main: {
    width: 160,
    height: 160,
    borderRadius: "100%",
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderBottomColor: 'yellow',
    transform: [{ rotate: '45deg' }],
    
  },
  circle1Main2: {
    width: 160,
    height: 160,
    borderRadius: "100%",
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    
  },
  circleCountText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 600,
  },
  circleCountTitle: {
    color: 'white',
    fontSize: 17
  },
  circle1MainView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle1MainView2: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftRadius: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50
  },
  rightRadius: {
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50
  },
  semiCircle: {
    width: "100%",
    height: "50%",
    backgroundColor: 'skyblue',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    overflow: 'hidden',
    position: "absolute",
    bottom: 0
  },
});
