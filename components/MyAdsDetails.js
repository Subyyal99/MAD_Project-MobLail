import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Text, Card, Button, Icon, AntDesign, Overlay} from 'react-native-elements';

import { initializeApp } from "firebase/app";

const FIREBASE_API_ENDPOINT = 'https://moblail-default-rtdb.firebaseio.com/';

const MyAdDetails = ({route,navigation}) => {
  const [visible, setVisible] = useState(false);
  
    const toggleOverlay = () => {
      setVisible(!visible);
    };
  

   const deleteData = () => {
     
    const id = route.params.ID;
    var requestOptions = {
      method: 'DELETE',
    };

    fetch(`${FIREBASE_API_ENDPOINT}/ads/${id}.json`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log('Delete Response:', result))
      .catch((error) => console.log('error', error));
  };
  



  return (
    <SafeAreaView style={styles.container}>
    
      <Card style={{height:'100%'}}> 
      <ScrollView>
     <Card.Image
          style={{
            marginBottom: 10,
            resizeMode: 'contain',
            overflow: 'hidden',
          }}
         source={{ uri: route.params.Image }}
        />
        
        <Text style={{ fontSize: 25, fontWeight: 'bold',  alignself: 'center', }}>
         {route.params.Brand}
        </Text>
        <Card.Divider />
        <View style= {styles.rowview}>
        <Text style={styles.txt1}>Price:</Text>
        <Text style= {styles.txt1}>Rs {route.params.Price}</Text>
        </View>
        <View style= {styles.rowview}>
        <Text style={styles.txt1}>Company:</Text>
        <Text style= {styles.txt1}>{route.params.Brand}</Text>
        </View>
        <View style= {[styles.rowview, {marginBottom:'5%'}]}>
        <Text style={styles.txt1}>Model:</Text>
        <Text style= {styles.txt1}>{route.params.Model}</Text>
        </View> 
         <Card.Divider />
        <Text style={styles.heading2}>Description</Text>
        <Text style={[styles.txt1, {marginBottom:'5%'}]}>{route.params.Details}</Text>
        <Card.Divider />
        <Text style={styles.heading2}>Conidtion</Text>
        <Text style={[styles.txt1, {marginBottom:'5%'}]}>New</Text>
        <Card.Divider /> 
        <Text style={styles.heading2}>Mobile Number</Text>
        <Text style={[styles.txt1, {marginBottom:'5%'}]}>{route.params.Contact}</Text> 
        <Card.Divider /> 
       
        <TouchableOpacity style = {styles.offer}
       onPress={()=>{navigation.navigate("offer",{i:route.params.ID,
        p:route.params.Price,b:route.params.Brand,d:route.params.Details,
        c:route.params.Contact,m:route.params.Model})}}>
        <Text style={{
          fontSize:16,
          color:'white',
          fontWeight: "bold",
        }}>
        OFFERS</Text>
        </TouchableOpacity>
        
     <View style = {styles.viewbtn}>
      <TouchableOpacity 
       onPress={()=>{navigation.navigate("UpdateMyAds",{i:route.params.ID,
       p:route.params.Price,b:route.params.Brand,d:route.params.Details,
       c:route.params.Contact,m:route.params.Model, img: route.params.Image})}}
      style={styles.tch2}>
      <Image
            source={{
              uri:
                'https://www.iconsdb.com/icons/preview/white/edit-xxl.png',
            }}
            style={styles.buttonImageIconStyle}
          />
        <Text style={styles.btntxt}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tch2}
      onPress ={()=>{
      toggleOverlay();
     }}>
      <Image
            source={{
              uri:
                'https://www.iconsdb.com/icons/preview/white/trash-2-xxl.png',
            }}
            style={styles.buttonImageIconStyle}
          />
      
        <Text style={styles.btntxt}>Delete</Text>
      </TouchableOpacity>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}>Delete?</Text>
        <Text style={styles.textSecondary}>
          Are You Sure?
        </Text>
        <Button
          title="Yes"
          onPress={()=> {  toggleOverlay();deleteData();navigation.navigate("MyAds")}}
        />
      </Overlay>
      </View> 
      
         
       </ScrollView>
      </Card>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt1: {
    //padding: 5,
    fontSize:16,
    marginTop:'3%',
    
  },
  heading2: {
    fontSize: 15,
     fontWeight: 'bold',  
     textDecorationLine: 'underline' 
  },
   tch2 : {
    alignItems: 'center', 
    alignSelf: "center",  
  borderRadius : 100,
  borderWidth : 2,
  width: 107,
  backgroundColor: "black",
   padding:5,
    flexDirection: 'row',
     height: 40,
      margin: 3,
      
  },
  offer: {
    alignItems: 'center', 
    alignSelf: "center",  
  borderRadius : 100,
  borderWidth : 2,
  borderColor:'green',
  width: "65%",
  backgroundColor: "black",
     height: 40,
     justifyContent:'center',
     marginTop:'5%'

   

  },
  btntxt: {
    fontSize:13,
    fontWeight: "bold",
    color:"white"
  }, 
 
  buttonImageIconStyle: {
    margin: 5,
    height: 25,
    width: 20,
    resizeMode: 'contain',
  }, 
  viewbtn:{
        flexDirection: "row",
        //position:'relative',
        bottom:0,
        //width: "110%",
        //marginLeft:-12,
        marginTop:'5%',
        justifyContent: 'center'


  },
  rowview: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
    padding:20
  },
});

export default MyAdDetails;