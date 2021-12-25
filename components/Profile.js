import React from 'react';
import { View, ScrollView, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';


const ProfileScreen = ({navigation}) => {
  return (
    <>
      
        <SafeAreaView style={styles.container}>
          
          <Card>
          
            <Card.Title>PERSONAL INFORMATION</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0, resizeMode: 'contain', overflow: 'hidden' }}
              source={{
                uri:
                  'https://hairmanz.com/wp-content/uploads/2020/04/man-bun-the-best-guide-for-men-mainart.jpg',
              }}
            />
            
            
            <Text style = {{
              fontSize:18, fontWeight:'bold', 
              alignSelf: "center",
              margin:10
            
            }}> 
            PROFILE PICTURE</Text>
             <Card.Divider />
             <Text style= {styles.heading}>Name</Text>
            <Text style = {styles.txt}>SUBYYAL SIDDIQUI </Text>
            <Text style= {styles.heading}>Email</Text>
            <Text style = {styles.txt}>subyyal1234@gmail.com </Text>
            <Text style= {styles.heading}>Mobile Number</Text>
            <Text style = {styles.txt}>03121234567</Text>
            <Card.Divider />

             <TouchableOpacity 
             onPress = {() => navigation.navigate("EditProfile")}
             style={styles.tch2}>
            <Image
            source= {{uri : 'https://www.iconsdb.com/icons/preview/white/edit-xxl.png'}}
            style={styles.buttonImageIconStyle} />
             <Text style={styles.btntxt}>Edit Your Profile</Text>
             </TouchableOpacity>



          </Card>
        </SafeAreaView>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop:"10%"
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  heading: {
    fontSize: 14,
    marginTop:10,
    textDecorationLine: 'underline',
    marginBottom: 4,
    paddingLeft:5

  },
  txt: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft:5


  },
   tch2 : {
    alignItems: 'center', 
    alignSelf: "center",  
  borderRadius : 100,
  borderWidth : 2,
  borderColor: '#bf4137',
  width: "50%",
  backgroundColor: "black",
   padding:5,
    flexDirection: 'row',
     height: 40,
      marginTop: '20%',
  },

  btntxt: {
    fontSize:13,
    fontWeight: "bold",
    color:"white",
    alignContent:'center',
    alignSelf: 'center',
    marginLeft: "10%"
  }, 
 
  buttonImageIconStyle: {
    margin: 5,
    height: 25,
    width: 20,
    resizeMode: 'contain',
  }, 
});

export default ProfileScreen;