import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions, Image, Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Login from '../screen/Login';
// Logo....
import Logo from '../assets/logo.png';


const BGColor = "#fff"
const Intro = () => {
    // SafeArea Value...
    const edges = useSafeAreaInsets();

    // Animation Values....
    const startAnimation = useRef(new Animated.Value(0)).current;

    // Scaling Down Both logo and Title...
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    // Offset Animation....
    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    // Animating COntent...
    const contentTransition = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    // Animation Done....
    useEffect(() => {

        // Starting Animation after 500ms....
        setTimeout(() => {

            // Parallel Animation...
            Animated.parallel([
                Animated.timing(
                    startAnimation,
                    {
                        // For same Height for non safe Area Devices...
                        toValue: -900,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleLogo,
                    {
                        // Scaling to 0.35
                        toValue: 0.5,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleTitle,
                    {
                        // Scaling to 0.8
                        toValue: 0.8,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo,
                    {
                        // Moving to Right Most...
                        toValue: {
                            x: (Dimensions.get("window").width / 2) - 40,
                            y: (Dimensions.get('window').height / 2) - 20
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveTitle,
                    {
                        // Moving to Right Most...
                        toValue: {
                            x: -75,
                            // Since image size is 100...
                            y: (Dimensions.get('window').height / 2) - 100
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    contentTransition,
                    {
                        toValue: 0,
                        useNativeDriver: true
                    }
                )
            ])
                .start();

        }, 4000); 
 
    }, [])

    // Going to Move Up like Nav Bar...
    return (

        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0, 
            left: 0,
            right: 0,
            marginTop:-75
        }}>
        
            <Animated.View style={{
                flex: 1,
                backgroundColor: BGColor,
                zIndex: 1,
                transform: [
                    { translateY: startAnimation }
                ]
            }}>

                <Animated.View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <View style={{
                       position: 'absolute',
                        flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                       }}>
                    <Animated.Image source={Logo} style={{
                        width: 131,
                        height: 133,
                        marginBottom: 20,
                        transform: [
                            { translateX: moveLogo.x },
                            { translateY: moveLogo.y },
                            { scale: scaleLogo },

                        ]
                    }}></Animated.Image>

                    <Animated.Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'black',
                        transform: [
                            { translateX: moveTitle.x },
                            { translateY: moveTitle.y },
                            { scale: scaleTitle }
                        ]
                    }}> Marine Notifications</Animated.Text>

                  </View>
                <Text
        style={{
          fontSize: 15,
            marginTop:  (Dimensions.get('window').height), 
          fontWeight: 'bold',
          textAlign: 'center',
          height: 100,
          
        }}>
        <Image
        style={ {width: 20,height: 20}}
        source={require('../assets/IT_LOGO.jpg')} 
      /> 
       <Text style={{marginLeft:5}}>  IT Department  </Text>       

      </Text>
                </Animated.View>

            </Animated.View> 

            <Animated.View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.04)',
                zIndex: 0,
                transform: [
                    { translateY: contentTransition }
                ]
            }}>
            <Login></Login>
            </Animated.View>

               

        </View>
    );
}
export default Intro;