import  React, {useState}  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/Login.js'
import SignupScreen from './components/Signup'
import PostAdScreen from './components/PostAd'
import EditAdScreen from './components/EditAd'
import ProfileScreen from './components/Profile'
import EditProfileScreen from './components/EditProfile'

const Stack = createNativeStackNavigator();

function App() {
  const [showscreen, hidescreen] = useState("true");
  return (
    // showscreen ? (
    //   <LoginScreen event = {hidescreen} />
    // ) : 
    <NavigationContainer>
    <Stack.Navigator initialRouteName = {'PostAd'}>
    <Stack.Screen name="Login" component={LoginScreen}
     options={{
      headerTitle : "LOGIN" ,
       //headerTitleAlign : "center",
        }}/> 
     <Stack.Screen name="Sign" component={SignupScreen}
     options={{
      headerTitle : "SIGN-UP" 
        }}/> 
     <Stack.Screen name="PostAd" component={PostAdScreen}
     options={{
      headerTitle : "POST AN AD" 
        }}/> 
     <Stack.Screen name="EditAd" component={EditAdScreen}
     options={{
      headerTitle : "EDIT AN AD" 
        }}/> 
     <Stack.Screen name="Profile" component={ProfileScreen}
     options={{
      headerTitle : "PROFILE PAGE" 
        }}/>
     <Stack.Screen name="EditProfile" component={EditProfileScreen}
     options={{
      headerTitle : "EDIT YOUR PROFILE" 
        }}/>                   
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

