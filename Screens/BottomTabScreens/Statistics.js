import { StyleSheet, Text, View } from 'react-native'

const Statistics = () => {
  return (
    <View style={styles.container}>
      <Text>Statistics</Text>
    </View>
  )
}

export default Statistics

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center'
    }
})