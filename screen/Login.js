import React, {useEffect, useState} from 'react';
import { Animated, Dimensions, Image, ScrollView, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Input, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {auth} from '../firebase';
// Post's....

const Login = () => {
  const edges = useSafeAreaInsets();
  const navigation = useNavigation(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      if(authUser.email === 'it@marine.com'){
        navigation.navigate('Cpanel')
      }else if((authUser.email != 'it@marine.com')){
        navigation.navigate('Chats')
      }
    })
  })

  const login_handler = ()=>{
      auth.signInWithEmailAndPassword(email, password).catch((error) => alert(error.message))
  }
  
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor:'#fff',
        flex:1,
        direction:"rtl"
      }}>
      <View  style={{
                       position: 'absolute',
                        flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:  (Dimensions.get('window').height/6),
                       }}>
       <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
           paddingBottom: 25,
        }}>
        Marine Notifications
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
           paddingBottom: 40,
        }}>
        تسجيل الدخول
      </Text>

      <Input
        textAlign={'center'}
        placeholder="ادخل اسم الدخول"
        leftIcon={<Icon name="user" size={24} color="black" />}
         value={email}
        onChangeText={(text) => setEmail(text)}
        autoCompleteType='off'
      />

      <Input
        placeholder="ادخل كلمة المرور"
        textAlign={'center'}
        leftIcon={<Icon name="lock" size={24} color="black" />}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCompleteType='off'
      />
      <Button
        buttonStyle={{ width: 200, backgroundColor:'#000' }}
        containerStyle={{ margin: 5 }}
        linearGradientProps={null}
        title="تسجيل الدخول"
        titleStyle={{ fontSize: 25,fontWeight: 'bold',marginHorizontal: 5 }}
        onPress= {login_handler}  
      />



      </View>
      
       <Text
        style={{
          fontSize: 15,
          marginTop: Platform.OS === 'ios' ? (Dimensions.get('window').height)-100 : (Dimensions.get('window').height) - 50 ,
          fontWeight: 'bold',
          textAlign: 'center',
          height: 100,
          
        }}>
         <Image
        style={ {width: 20,height: 20}}
        source={require('../assets/IT_LOGO.jpg')} 
      /> 
 <Text style={{marginRight:5}}> إدارة تكنولوجيا المعلومات  </Text>       
      </Text>
    </View>
  );
}
export default Login;