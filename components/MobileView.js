import React, { useState } from 'react';
import {
  View, TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView, FlatList
} from 'react-native';

import { Text, Card, Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from "firebase/app";


const FIREBASE_API_ENDPOINT = 'https://fir-2bf8d-default-rtdb.firebaseio.com/';

const MobileAds = ({navigation, route}) => {
const [products, setProducts] = React.useState();
const [currentuser, setcurrent] = useState(route.params);

console.log("in home")
console.log(currentuser)
const getData = async () => {
    const response = await fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`);
    const data = await response.json();

    var arr = [];
   var keyValues = Object.keys(data);

    for (let i = 0; i < keyValues.length; i++) {
      let key = keyValues[i];
      let credential = {
        Brand: data[key].Brand,
        Price: data[key].Price,
        Model: data[key].Model,
        Details: data[key].Details,
        Contact: data[key].Contact
      };
      arr.push(credential);
    }
    console.log(arr);
    setProducts(arr)
  };
    
  React.useEffect(() => {
    getData();
  }, [setProducts]);
  return (
    
    <View style = {{flex:1, }}>
    <View style={{alignItems:'center', flexDirection:'row',
     alignSelf: 'center'}}>
    <TextInput style={styles.search} placeholder="  Search"></TextInput>
    <Icon name="search"/>
    </View>
      <ScrollView>
        <View style={styles.container}>
      <FlatList style={styles.showList}
      refreshing={false}
      onRefresh={getData}
      data={products}
      numColumns={2}
      renderItem={({item,index})=>
      <TouchableOpacity 
      onPress={()=>
        navigation.navigate("Details", item)
        }>
            <Card containerStyle={styles.box}>
              <Card.Image
                style={{ marginBottom:10, resizeMode:'contain', overflow:'hidden'}}
                 source={require('../assets/pixel4.jpg')}
                  resizeMode="cover"
              />
              <Card.Divider />
              <Text style={styles.cardTitle}>{item.Brand}</Text>
              <Text style={styles.priceText}>{item.Price}</Text>
              <Card.Divider />
              
            </Card>
      </TouchableOpacity>
        }
        />
        </View>
      </ScrollView>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    
  },
   button: {
    borderRadius: 10,
    marginBottom: '5%',
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    width: '100%',
    height: '15%',
    
  },
  box: {
    backgroundColor:'lightgray',
    
  },
 search: {
      //alignContent:'center',
      borderColor:'black',
      borderWidth:1,
      width: "80%",
      borderRadius:10,
      //marginLeft:'10%',
      marginTop: '5%',
      marginBottom: '5%',
      
    
 }
  
 
});

export default MobileAds;
