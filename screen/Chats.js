import React,{useLayoutEffect, useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Avatar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {auth, db} from '../firebase';

import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './MessageStyles';


const MessagesScreen = () => {

  const [chats, setChats] = useState("");
   const navigation = useNavigation(); 

 useEffect(() => {
    const unsubscribe = db.collection('chats').onSnapshot(snapshot =>{
        setChats(snapshot.docs.map (doc => ({
          id : doc.id,
          data: doc.data()
        })
        ))
    })
    return unsubscribe;
  },[navigation])
   useLayoutEffect (()=>{
     navigation.setOptions({
       title:auth.currentUser.displayName,
       headerStyle:{ backgroundColor: "#fff"},
       headerTintColor:"black",
       headerLeft:()=>(
         <View style={{marginLeft:0}}>
         <TouchableOpacity activeOpacity={.5} >
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

   const signOut = ()=>{
      auth.signOut().then(()=>   navigation.replace('Login')).catch((error) => alert(error.message))
  }
    return (
      <Container>
        <FlatList 
          data={chats}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chat', {chatName:item.data.chatName, image: item.data.chatPhoto, id :item.id})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={{uri : item.data.chatPhoto}} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.data.chatName}</UserName>
                    <PostTime>{}</PostTime>
                  </UserInfoText>
                  <MessageText>{}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
