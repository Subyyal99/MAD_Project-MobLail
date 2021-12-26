import React from 'react';
import {
  View, TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import { Text, Card, Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

const MobileAds = ({navigation}) => {
  return (
    
    <View style = {{flex:1, }}>
    <View style={{alignItems:'center', flexDirection:'row',
     alignSelf: 'center'}}>
    <TextInput style={styles.search} placeholder="  Search"></TextInput>
    <Icon name="search"/>
    </View>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity  onPress={()=>navigation.navigate("Details")}>
            <Card containerStyle={styles.box}>
              <Card.Image
                style={{ marginBottom:10, resizeMode:'contain', overflow:'hidden'}}
                source={require('../assets/pixel4.jpg')}
              />
              
              <Card.Divider />
              <Text style={{ marginBottom: 10 }}>
                Description Of Mobile Goes Here
              </Text>
              <Card.Divider />
              <Button
              onPress={()=>navigation.navigate("Details")}
                icon={
                  <Icon
                    name="code"
                    color="#ffffff"
                    iconStyle={{ marginRight: 10 }}
                  />
                }
                style={styles.button}
                title="Price 250"
              />
            </Card>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => console.log('I am touched')}>
            <Card  containerStyle ={styles.box} >
              <Card.Image
                style={{ marginBottom:10, resizeMode:'contain', overflow:'hidden'}}
                source={require('../assets/MiLite.jpg')}
              />
              
              <Card.Divider />
              <Text style={{ marginBottom: 10 }}>
                Description Of Mobile Goes Here
              </Text>
              <Card.Divider />
              <Button
              onPress={()=>console.log('price is touched')}
                icon={
                  <Icon
                    name="code"
                    color="#ffffff"
                    iconStyle={{ marginRight: 10 }}
                  />
                }
                style={styles.button}
                title="Price 250"
              />
            </Card>
          </TouchableOpacity>
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
