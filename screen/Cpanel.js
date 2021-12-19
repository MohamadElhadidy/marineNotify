import React, {useLayoutEffect} from 'react';
import { Animated, Dimensions, Image, ScrollView, View, Platform, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {auth} from '../firebase';
// Post's....

const Cpanel = () => {
  const edges = useSafeAreaInsets();

   const navigation = useNavigation(); 
    const signOut = ()=>{ auth.signOut().then(()=>   navigation.replace('Login')).catch((error) => alert(error.message))}

   useLayoutEffect (()=>{
     navigation.setOptions({
       title:auth.currentUser.displayName,
       headerStyle:{ backgroundColor: "#fff"},
       headerTintColor:"black",
       headerLeft:()=>(
         <View style={{marginLeft:0}}>
         <TouchableOpacity activeOpacity={.5}>
           <Image rounded  source={{uri : auth.currentUser.photoURL, width: 40, height: 40}} />
         </TouchableOpacity>
         </View>
       ),
       headerRight:()=>(
         <View style={{marginLeft:20}}>
         <TouchableOpacity activeOpacity={.5} onPress={signOut}>
           <Icon name="sign-out" size={24} color="black" />
         </TouchableOpacity>
         </View>
       )
     })
   },[navigation])


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
       h2
               style={{
          fontWeight: 'bold',
          textAlign: 'center',
           paddingBottom: 25,
        }}>
        Marine Notifications
      </Text>

       <Text
       h3
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
           paddingBottom: 25,
        }}>
        Cpanel 
      </Text>
     

      <Button
     buttonStyle={{ width: 200 , backgroundColor:'#000'}}
        containerStyle={{ margin: 5 }}
        linearGradientProps={null}
        title="Register New User"
        titleStyle={{ fontSize: 18,fontWeight: 'bold',marginHorizontal: 5 }}
        onPress={() =>  navigation.navigate('Register')}
      />
       <Button
        buttonStyle={{ width: 200 , backgroundColor:'#000'}}
        containerStyle={{ margin: 5 }}
        linearGradientProps={null}
        title="Chats"
        titleStyle={{ fontSize: 18,fontWeight: 'bold',marginHorizontal: 5 }}
        onPress={() =>  navigation.navigate('Chats')}
      />

      <Button
        buttonStyle={{ width: 200 , backgroundColor:'#000'}}
        containerStyle={{ margin: 5 }}
        linearGradientProps={null}
        title="New chat"
        titleStyle={{ fontSize: 18,fontWeight: 'bold',marginHorizontal: 5 }}
        onPress={() =>  navigation.navigate('NewChat')}
      />


      </View>
       <Text
        style={{
          fontSize: 15,
          marginTop: Platform.OS === 'ios' ? (Dimensions.get('window').height) -180 : (Dimensions.get('window').height) -100 ,
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
export default Cpanel;