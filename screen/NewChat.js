import React, {useState} from 'react';
import { Animated, Dimensions, Image, ScrollView, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Input, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {db} from '../firebase';
// Post's....

const NewChat = () => {
const edges = useSafeAreaInsets();
const navigation = useNavigation(); 
const [name, setName] = useState("");
const createChat =  async ()=>{
 await db.collection('chats').add({
   chatName:name,
   chatPhoto: "https://marine-co.online/images/avatar.png"
 })
  .then(() => { 
    const update = {
        displayName: name,
        photoURL: "https://marine-co.online/images/avatar.png"
      };
     navigation.goBack();
  })
  .catch((error)=> alert(error.message));
}
   
  return (

    <View
      style={{
        flex:1,
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'stretch',
        paddingTop: edges.top + 0,
        paddingBottom: 25,
        alignItems: 'center',
        backgroundColor:'#fff',
        direction:"rtl",
        
      }}>
  <Input
        textAlign={'center'}
        autoFocus
        placeholder="ادخل اسم الغرفة "
        leftIcon={<Icon name="message1" size={24} color="black" />}
        value={name}
        onChangeText={(text) => setName(text)}
   />


      <Button
        buttonStyle={{ width: 200 , backgroundColor:'#000'}}
        containerStyle={{ margin: 5 }}
        linearGradientProps={null}
        title="إنشاء "
        titleStyle={{ fontSize: 25,fontWeight: 'bold',marginHorizontal: 5 }}
        onPress={createChat}
      />
      
    </View>
  );
}
export default NewChat;