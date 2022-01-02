import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity,SafeAreaView } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

const ads = [
  {
    name: 'Pixel4a',
    id:1,
    avatar: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Copy_of_Pixel_4a_Front__Back_2_DsEGUfI.max-1000x1000.jpg',
  },
  {
    name: 'iPhone5',
    id:2,
    avatar: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Copy_of_Pixel_4a_Front__Back_2_DsEGUfI.max-1000x1000.jpg',
  },
  {
    name: 'Banana Phone',
    id:3,
    avatar: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Copy_of_Pixel_4a_Front__Back_2_DsEGUfI.max-1000x1000.jpg',
  },
  
];

const adM = ({navigation}) => {
  return (
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Title>Add Management</Card.Title>
            <Card.Divider />
            {ads.map((u, i) => {
              return (
                
                <View key={i} 
                style={{flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity style={{flexDirection: 'row',marginBottom:5}}
               onPress={()=>{navigation.navigate('AdManageDetails')}}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <Text style={styles.name}>AD ID: {u.id} </Text>
                  <Text style={styles.name}>{u.name}</Text>
                  </TouchableOpacity>
                   <TouchableOpacity onPress={()=>console.log('Direct Delete')}>
                  <Icon name='delete' />
                  </TouchableOpacity>
                </View>
                
              );
            })}
          </Card>
        </View>
      </ScrollView>
     
  );
};

const adM2 =()=>{
  return (
    <View style={styles.container}>
      <Card>
        <Card.Image
          style={{
            marginBottom: 10,
            resizeMode: 'contain',
            overflow: 'hidden',
          }}
          source={{uri:('https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Copy_of_Pixel_4a_Front__Back_2_DsEGUfI.max-1000x1000.jpg')}}
        />
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
          Google Pixel 4a
        </Text>
        <Card.Divider />
        <Text style={styles.heading2}>Details:</Text>

        <Text style={styles.txt1}>Price:</Text>
        <Text style={styles.txt1}>Company:</Text>
        <Text style={styles.txt1}>Model:</Text>

        <Card.Divider />
        <Text style={styles.heading2}>Description:</Text>
        <Text style={styles.txt1}>Conidtion 10/10, body mint.</Text>
        <Card.Divider />
        <Text style={styles.heading2}>Owner:</Text>
        
        <Text style={{paddingBottom:5,paddingRight:200}}>Azam</Text>
         <Text style= {styles.heading}>Reviews</Text>
            <Text style = {styles.txt}>Fraud Ad</Text>
            <Card.Divider />

             <TouchableOpacity 
             onPress = {() => console.log('delete')}
             style={styles.tch2}>
           <Icon name='delete'
           color='white'/>
             <Text style={styles.btntxt}>Delete</Text>
             </TouchableOpacity>
       

      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  width: "40%",
  backgroundColor: "black",
   padding:5,
    flexDirection: 'row',
     height: 40,
      marginTop: '12%',
  },

  btntxt: {
    fontSize:17,
    fontWeight: "bold",
    color:"white",
    alignContent:'center',
    alignSelf: 'center',
    marginLeft: "13%"
  }, 
 
});

export  {adM,adM2};