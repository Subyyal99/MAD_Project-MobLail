import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput
} from 'react-native';

import { Text, Card, Button, Icon, AntDesign } from 'react-native-elements';
const users = [
  {
    name: 'brynn',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
  }];
const Detail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Image
          style={{
            marginBottom: 10,
            resizeMode: 'contain',
            overflow: 'hidden',
          }}
          source={require('../assets/pixel4.jpg')}
        />
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: '5%' }}>
          Google Pixel 4a
        </Text>
        <Card.Divider />
        <Text style={styles.heading2}>Details</Text>

        <Text style={styles.txt1}>Price:</Text>
        <Text style={styles.txt1}>Company:</Text>
        <Text style={styles.txt1}>Model:</Text>

        <Card.Divider />
        <Text style={styles.heading2}>Description</Text>
        <Text style={styles.txt1}>Conidtion 10/10, body mint.</Text>
        <Card.Divider />
        <Text style={styles.heading2}>Owner</Text>
        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
        <Text style={{paddingBottom:5,}}>Azam</Text>
         <TouchableOpacity  
         onPress={()=>console.log("0123456789")}>
         <Icon
          style = {{marginBottom:10 ,}}
          name='call' /></TouchableOpacity>
        </View>
        <Card.Divider />

        <Text style = {styles.heading2}>Your Offer</Text>
      <TextInput
          style={styles.input}
          placeholder=' 50,000'
          keyboardType = "number-pad"
        />
       <TouchableOpacity style={styles.postbtn}>
        <Text style={styles.imgtxt}>OFFER</Text>
        </TouchableOpacity> 
        <Card.Divider />

      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt1: {
    paddingBottom: 5,
  },
  heading2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '3%',
    textDecorationLine: 'underline'
  },

  input: {
 borderColor: '#bf4137', 
 borderWidth: 1,  
 marginBottom: '5%',
borderRadius: 8,
 fontSize: 17,
 fontWeight: '500'
  },

   postbtn : {
    alignItems: 'center', 
    //alignSelf: "center",  
  borderRadius : 8,
  borderWidth : 2,
  borderColor: '#bf4137',
  width: '30%',
  backgroundColor: "black",
   padding:5,
  marginBottom: '5%',

  },
   imgtxt: {
    fontSize:17,
    fontWeight: "bold",
    color:"white"
    
  }, 
});

export default Detail;
