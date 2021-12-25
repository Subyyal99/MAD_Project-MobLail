import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,

} from 'react-native';

import { Text, Card, Button, Icon, AntDesign } from 'react-native-elements';

// <Card.Image
//           style={{
//             marginBottom: 10,
//             resizeMode: 'contain',
//             overflow: 'hidden',
//           }}
//           source={{uri: 'https://www.gizmochina.com/wp-content/uploads/2018/02/Samsung-Galaxy-S8-Plus-G955F_2-500x500.jpg'}}
//         />
const EditAdScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Card style={{height:'100%'}}> 
     <Card.Image
          style={{
            marginBottom: 10,
            resizeMode: 'contain',
            overflow: 'hidden',
          }}
          source={{uri: 'https://www.gizmochina.com/wp-content/uploads/2018/02/Samsung-Galaxy-S8-Plus-G955F_2-500x500.jpg'}}
        />
        
        <Text style={{ fontSize: 25, fontWeight: 'bold',  alignself: 'center', }}>
         Samsung Galaxy S8
        </Text>
        <Card.Divider />
        <Text style={styles.heading2}>Details</Text>

        <Text style={styles.txt1}>Price:</Text>
        <Text style={styles.txt1}>Company:</Text>
        <Text style={styles.txt1}>Model:</Text>
        <Card.Divider />
        
     <View style = {styles.viewbtn}>
        <TouchableOpacity style={styles.tch2}>
        <Image
            source={{
              uri:
                'https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-view-icon-png-image_4143925.jpg',
            }}
            style={styles.buttonImageIconStyle}
          />
        <Text style={styles.btntxt}>View More</Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.tch2}>
      <Image
            source={{
              uri:
                'https://www.iconsdb.com/icons/preview/white/edit-xxl.png',
            }}
            style={styles.buttonImageIconStyle}
          />
        <Text style={styles.btntxt}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tch2}>
      <Image
            source={{
              uri:
                'https://www.iconsdb.com/icons/preview/white/trash-2-xxl.png',
            }}
            style={styles.buttonImageIconStyle}
          />
      
        <Text style={styles.btntxt}>Delete</Text>
      </TouchableOpacity>
      </View> 
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt1: {
    padding: 5,
    fontSize:20
  },
  heading2: {
    fontSize: 25,
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
      margin: 2,
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
        position:'relative',
        bottom:0,
        width: "110%",
        marginLeft:-12,
        marginTop:'90%',


  } 
});

export default EditAdScreen;
