import  React, {useState}  from 'react';
import { View, Text, Button, TextInput, StyleSheet, 
TouchableOpacity,  SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const LoginScreen = ({navigation, event}) => {
const passchk = (name, pas, list) => {
  var flag = 0;
  for(var i =0; i<= list.length; i++){
    if(list[i].name == name && list[i].pass == pas){
      flag = 1;
      break;
    }
  }
  if(flag === 1){
   event(false)
    navigation.navigate("Home");
  }
  else{
    console.log("in else")
      alert("Wrong Credential! \nEnter Again")
  }

}  
  const [getuser, setuser] = useState("");
  const [getpass, setpass] = useState("");

  const users = [{name: "subyyal", pass: "12345"},
  {name: "sani", pass: "12345"},{name: "zimal", pass: "12345"},]
  return (

    <SafeAreaView style = {styles.container}>
   <Input style={styles.Input}
  placeholder='  Enter Your User Name'
  onChangeText= {(x) => setuser(x)}

  value = {getuser}
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
/>
<Input style={styles.Input}
 placeholder="  Enter Your Password"
  value = {getpass}
  onChangeText= {(x) => setpass(x)}
 leftIcon={
    <Icon
      name='lock'
      size={24}
      color='black'
    /> 
 }
secureTextEntry={true} />

<TouchableOpacity
style={styles.tch}
  //onPress = {() => passchk(getuser, getpass, users)}
  onPress = {() => navigation.navigate("Home")}
  >
<Text style={styles.logintxt}>
LOGIN
</Text>
</TouchableOpacity>
<Text> Not have an account? </Text>
<TouchableOpacity
style={styles.tch}
  //onPress = {() => passchk(getuser, getpass, users)}
  onPress = {() => navigation.navigate("Sign")}>
<Text style={styles.logintxt}>
Create New Account
</Text>
</TouchableOpacity>


    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container : {
    flex: 1,
    paddingTop: "30%",
    margin: 10
  },

  tch : {
    alignItems: 'center', 
alignSelf: "center",  
  borderRadius : 15,
  borderWidth : 2,
  margin: 35,
  width: "65%",
  backgroundColor: "black",
  padding:5,
    borderColor: '#bf4137',


  },
  logintxt: {
    fontSize:25,
     fontWeight: "bold",
      color:"white"
    
  }, 
  Input: {
padding:0,
borderRadius: 100
  }
 
});

export default LoginScreen;
