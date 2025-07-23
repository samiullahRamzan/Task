import { StyleSheet, Text, View } from 'react-native'

const Chat = () => {
  return (
    <View style={styles.container}>
      <Text>Chat</Text>
    </View>
  )
}
export default Chat

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center'
    }
})


