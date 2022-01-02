import React from 'react';
import {
  View, TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Objects
} from 'react-native';

import { Text, Card, Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';


import { initializeApp } from "firebase/app";


const FIREBASE_API_ENDPOINT = 'https://fir-2bf8d-default-rtdb.firebaseio.com/';

const MyAds = ({navigation}) => {
const [products, setProducts] = React.useState();

const getData = async () => {
    const response = await fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`);
    const data = await response.json();

    var arr = [];
   var keyValues = Object.keys(data);

    for (let i = 0; i < keyValues.length; i++) {
      let key = keyValues[i];
      console.log(key);
      let credential = {
        Brand: data[key].Brand,
        Price: data[key].Price,
        Model: data[key].Model,
        Details: data[key].Details,
        Contact: data[key].Contact,
        ID: key
      };

     // console.log("Ider"+credential)
      arr.push(credential);
      //arr.push(keyValues);
    }
    console.log("KeyValues"+keyValues);
    //console.log("data"+data);
    console.log(arr);
    setProducts(arr)
  };
    
  React.useEffect(() => {
    getData();
  }, [setProducts]);

  
  
 return (
    <View style = {{flex:1, alignSelf: 'center'}}>
      <FlatList style={styles.showList}
      refreshing={false}
      onRefresh={getData}
      data={products}
      numColumns={2}
      renderItem={({item,index})=>
      <TouchableOpacity 
      onPress={()=>
        navigation.navigate("EditAd", item)
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
  
  );
}

const styles = StyleSheet.create({
 
  box: {
    flex:1,
    backgroundColor:'lightgray',
    width:"90%"
    
  },
 
  
 
});

export  default MyAds;
