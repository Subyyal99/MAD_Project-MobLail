import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity,SafeAreaView } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

const users = [
  {
    name: 'brynn',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
  },
  {
    name: 'thot leader',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
  {
    name: 'jsa',
    avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'andy vitale',
    avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
  },
  {
    name: 'tals',
    avatar: 'https://hairmanz.com/wp-content/uploads/2020/04/man-bun-the-best-guide-for-men-mainart.jpg',
  },
  {
    name: 'katy friedson',
    avatar:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
  },
];


const userM = ({navigation}) => {
  return (
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Title>User Management</Card.Title>
            <Card.Divider />
            {users.map((u, i) => {
              return (
                
                <View key={i} 
                style={{flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity style={{flexDirection: 'row',marginBottom:5}}
               onPress={()=>{navigation.navigate('UserManageDetails')}}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  
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

const userM2 =()=>{
  return (
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
        </SafeAreaView>
     
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

export  {userM,userM2};