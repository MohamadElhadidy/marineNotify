import React, {useState, useEffect, useCallback, useLayoutEffect} from 'react';
import {View, ScrollView, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = ({route}) => {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation(); 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello world',
        createdAt: new Date(),
        user: {
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);


  useLayoutEffect (()=>{
     navigation.setOptions({
       title: this.props.chatName,
       headerStyle:{ backgroundColor: "#fff"},
       headerTintColor:"black",
       headerLeft:()=>(
         <View style={{marginLeft:0}}>
         <TouchableOpacity activeOpacity={.5} >
           <Image rounded  />
         </TouchableOpacity>
         </View>
       ),
       headerRight:()=>(
         <View style={{marginLeft:20}}>
         <TouchableOpacity activeOpacity={.5} >
           <Icon name="sign-out" size={24} color="black" />
         </TouchableOpacity>
         </View>
       )
     })
   },[navigation])

 

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <Icon name='angle-double-down' size={22} color='#333' />
    );
  }

  return (
    <GiftedChat style={{
        alignItems: 'center',
        backgroundColor:'#0000',
        flex:1,
        justifyContent: 'center',
        direction:"rtl"
      }}
      minComposerHeight={0}
      maxComposerHeight={0}
      minInputToolbarHeight={0}
      renderInputToolbar={() => null}
      messages={messages}
      renderBubble={renderBubble}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />


    
  );
};

export default ChatScreen;


