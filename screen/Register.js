import React, {useState} from 'react';
import { Animated, Dimensions, Image, ScrollView, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Input, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {auth} from '../firebase';
// Post's....

const Register = () => {
const edges = useSafeAreaInsets();
const navigation = useNavigation(); 
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [ImageUrl, setImageUrl] = useState("");
const register =  ()=>{
  auth.createUserWithEmailAndPassword(email, password)
  .then(() => { 
    const update = {
        displayName: name,
        photoURL: ImageUrl || "https://marine-co.online/images/avatar.png"
      };
     auth.currentUser.updateProfile(update)
     navigation.replace('Chats');
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
        placeholder="ادخل الاسم "
        leftIcon={<Icon name="user" size={24} color="black" />}
        value={name}
        onChangeText={(text) => setName(text)}
   />

      <Input
        textAlign={'center'}
        placeholder="ادخل الايميل "
        leftIcon={<Icon name="envelope" size={24} color="black" />}
        value={email}
        onChangeText={(text) => setEmail(text)}
        
      /> 

      <Input
        placeholder="ادخل كلمة المرور"
        textAlign={'center'}
        leftIcon={<Icon name="lock" size={24} color="black" />}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

       <Input
        placeholder="Image Url"
        textAlign={'center'}
        leftIcon={<Icon name="link" size={24} color="black" />}
        value={ImageUrl}
        onChangeText={(text) => setImageUrl(text)}
        autoCompleteType='off'
      />
      <Button
        buttonStyle={{ width: 200 , backgroundColor:'#000'}}
        containerStyle={{ margin: 5 }}
        linearGradientProps={null}
        title="إنشاء حساب"
        titleStyle={{ fontSize: 25,fontWeight: 'bold',marginHorizontal: 5 }}
        onPress={register}
      />
      
    </View>
  );
}
export default Register;