import  React, {useState}  from 'react';
import {
  View,
  TextInput,
  StyleSheet, TouchableOpacity,  SafeAreaView, Image, StatusBar, ScrollView,CheckBox, Picker
} from 'react-native'
import { Text, Card, Button, Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';


const UpdateAdScreen = ({navigation}) => {
  const [image, setimage] = useState();
   const [isSelected, setSelect] = useState('');
  var defaultimg = "https://www.gizmochina.com/wp-content/uploads/2018/02/Samsung-Galaxy-S8-Plus-G955F_2-500x500.jpg"
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setimage(pickerResult.uri)
    console.log(pickerResult);
   
  }
  return (
    <>
        <SafeAreaView style={styles.container}>
        <ScrollView>
          <Card>
          
            <Card.Title>UPLOAD NEW AD</Card.Title>
            <Card.Divider />
            <Card.Image
              style={styles.logo}
      source={{ uri: image==null ? defaultimg:image }}/>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.imgbtn}>
      <Text style={styles.imgtxt}>Choose Image</Text>
      </TouchableOpacity>  
      <Card.Divider />
      
      <Text style = {{
        textAlign: "center",
         fontWeight: 'bold', 
         fontSize:30,}}>
       Ad Details </Text>
      <Text style = {styles.txt}> Price: </Text>
      <TextInput
          style={styles.input}
          placeholder=' 50,000'
          keyboardType = "number-pad"
        />
        <Text style = {styles.txt}> Company: </Text>
      <TextInput
          style={styles.input}
          placeholder=' Samsung'
        />
        <Text style = {styles.txt}> Model: </Text>
      <TextInput
          style={styles.input}
          placeholder=' 2021'
          
        /><Text style = {styles.txt}> Description: </Text>
      <TextInput
          style={styles.input}
          multiline={true}
          placeholder=' Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), aluminum frame SIM	Single SIM (Nano-SIM) '
        />
        <Text style = {styles.txt}> Condition: </Text>
        
        <Picker
        selectedValue={isSelected}
        style={{ height: 30, width: 100, marginBottom: 10 }}
        onValueChange={(itemValue, itemIndex) => setSelect(itemValue)}>
        <Picker.Item label="Used" value="Used" />
        <Picker.Item label="New" value="New" />
      </Picker>
        <Text style = {styles.txt}> Contact Number: </Text>
      <TextInput
          style={styles.input}
          placeholder=' 0312-1234567'
          keyboardType = "number-pad"
        />
        <Card.Divider />
        <TouchableOpacity style={styles.postbtn}>
        <Text style={styles.imgtxt}>UPDATE</Text>
        </TouchableOpacity>
        

        </Card>
        </ScrollView>
        
        </SafeAreaView>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  txt: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 7,
  },
  input: {
 borderColor: '#bf4137', 
 borderWidth: 1,  
 marginBottom: 15,
 borderRadius: 14,
 fontSize: 18,
 fontWeight: '500'
  },
  
   postbtn : {
    alignItems: 'center', 
    alignSelf: "center",  
  borderRadius : 100,
  borderWidth : 2,
  borderColor: '#bf4137',
  width: 100,
  backgroundColor: "black",
   padding:5,
  marginTop: '5%',

  },

  btntxt: {
    fontSize:20,
    fontWeight: "bold",
    color:"white",
    alignContent:'center',
    alignSelf: 'center',
  }, 
 
  logo: {

  padding: 0, 
  resizeMode: 'contain', 
  overflow: 'hidden'
  }, 
  
  imgbtn : {
    alignItems: 'center', 
alignSelf: "center", 
  borderColor: '#bf4137',
  borderRadius : 15,
  borderWidth : 2,
   marginTop: 20,
  width: "50%",
  backgroundColor: "black",
  padding:5,
  marginBottom: '7%'

  },
  imgtxt: {
    fontSize:20,
    fontWeight: "bold",
    color:"white"
    
  }, 
    heading: {
    fontSize: 14,
    marginTop:10,
    textDecorationLine: 'underline',
    marginBottom: 4,
    paddingLeft:5,
    fontWeight: 'bold'

  },
});

export default UpdateAdScreen;