import { default as Chat, default as Plus } from 'react-native-vector-icons/AntDesign';
import { default as Cross, default as Menu } from 'react-native-vector-icons/Entypo';
import Grid from 'react-native-vector-icons/Feather';
import { default as Bell, default as Profile } from 'react-native-vector-icons/FontAwesome';
import { default as Stats, default as Steps, default as Water } from 'react-native-vector-icons/Ionicons';

export default {
   Menu: (props) => (
    <Menu name="menu" size={props.size || 20} color={props.color || 'black'} />
  ),
  Grid:(props)=>(
    <Grid name="grid" size={props.size || 20} color={props.color || 'black'} />
  ),
  Stats:(props)=>(
    <Stats name="stats-chart" size={props.size || 20} color={props.color || 'black'} />
  ),
  Chat:(props)=>(
    <Chat name="wechat" size={props.size || 20} color={props.color || 'black'} />
  ),
  Profile:(props)=>(
    <Profile name="user-circle-o" size={props.size || 20} color={props.color || 'black'} />
  ),
  Bell:(props)=>(
    <Bell name="bell" size={props.size || 20} color={props.color || 'black'} />
  ),
  Cross:(props)=>(
    <Cross name="cross" size={props.size || 20} color={props.color || 'black'} />
  ),
  Plus:(props)=>(
    <Plus name="plus" size={props.size || 20} color={props.color || 'black'} />
  ),
  Steps:(props)=>(
    <Steps name="footsteps" size={props.size || 20} color={props.color || 'black'} />
  ),
  Water:(props)=>(
    <Water name="water" size={props.size || 20} color={props.color || 'black'} />
  )
}

