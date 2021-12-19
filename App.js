import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './components/Intro';
import Register from './screen/Register';
import Chats from './screen/Chats';
import Chat from './screen/Chat';
import Cpanel from './screen/Cpanel';
import NewChat from './screen/NewChat';

function LoginScreen({navigation}) {
  return (
      <Intro />
  );
}


function RegisterScreen() {
  return (
      <Register />
  );
}


function ChatsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Chats />
    </View>
  );
}

function ChatScreen() {
  return (
      <Chat />
  );
}

function CpanelScreen() {
  return (
      <Cpanel />
  );
}

function NewChatScreen() {
  return (
      <NewChat/>
  );
}



const Stack = createNativeStackNavigator();

function App() { 
  return (
    <NavigationContainer initialRouteName="Login"> 
      <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginScreen} 
                options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}/>
      <Stack.Screen  options={{
          title: 'إنشاء حساب',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: 'bold', 
            fontSize:25
          },
        }} name="Register" component={RegisterScreen}  />
          <Stack.Screen  name="Chats" component={ChatsScreen}  />
          
         <Stack.Screen name="Chat" component={ChatScreen}  /> 

        <Stack.Screen  options={({ route }) => ({
          title:  "Cpanel" ,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: 'bold', 
            fontSize:25
          },
          
        })} name="Cpanel" component={CpanelScreen}  />

        <Stack.Screen  options={({ route }) => ({
          title:  "new Chat" ,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: 'bold', 
            fontSize:25
          },
          
        })} name="NewChat" component={NewChatScreen}  />


        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
export default App;