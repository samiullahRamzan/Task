import { Ionicons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Colors from '../constants/Colors';

const data = [
  { id: '1', day: 'Mon', date: '22' },
  { id: '2', day: 'Tue', date: '23' },
  { id: '3', day: 'Wed', date: '24' },
  { id: '4', day: 'Thu', date: '25' },
  { id: '5', day: 'Fri', date: '26' },
  { id: '6', day: 'Sat', date: '27' },
  { id: '7', day: 'Sun', date: '28' },
  { id: '8', day: 'Mon', date: '29' },
  { id: '9', day: 'Tue', date: '30' },
  { id: '10', day: 'Wed', date: '1' },
  { id: '11', day: 'Thu', date: '2' },
  { id: '12', day: 'Fri', date: '3' },
  { id: '13', day: 'Sat', date: '4' },
  { id: '14', day: 'Sun', date: '5' },
];

const ITEM_WIDTH = 80; // card width + margin

const Calender = () => {
  const scrollRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  const handleScrollLeft = () => {
    const newX = Math.max(0, scrollX - ITEM_WIDTH);
    scrollRef.current?.scrollTo({ x: newX, animated: true });
    setScrollX(newX);
  };

  const handleScrollRight = () => {
    const newX = scrollX + ITEM_WIDTH;
    scrollRef.current?.scrollTo({ x: newX, animated: true });
    setScrollX(newX);
  };

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={handleScrollLeft} style={styles.arrow}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </Pressable>

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        scrollEnabled={false} // disable manual swipe to ensure control
      >
        {data.map((element) => (
          <View key={element.id} style={styles.card}>
            <Text style={styles.day}>{element.day}</Text>
            <Text style={styles.date}>{element.date}</Text>
          </View>
        ))}
      </ScrollView>

      <Pressable onPress={handleScrollRight} style={styles.arrow}>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  scrollContainer: {
    paddingHorizontal: 5,
  },
  card: {
    backgroundColor: Colors.statusBar1,
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
    alignItems: 'center',
    width: '10%',
  },
  day: {
    fontSize: 14,
    fontWeight: '600',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    paddingHorizontal: 5,
  },
});
