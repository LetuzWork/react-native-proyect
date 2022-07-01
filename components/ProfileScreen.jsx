import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styled from "styled-components/native";

import { getUser } from '../db/users';
import AsyncStorage from '../utils/AsyncStorage';
import { NavigationRouteContext } from '@react-navigation/native';
const DataContainter = styled.View`
  /* display: flex; */
  
  /* justify-content: center; */
  /* align-items: center; */
  margin: 60px auto;
  height: 100%;
`;

const StyledText = styled.Text`
  font-size: 20px;
  color: #666;
  margin: 10px;

`;
const Title = styled.Text`
  font-size: 30px;
  text-shadow: 2px 2px 5px #3333;

`;


const ProfileScreen = ({navigation, route, resetUser}) => {
  const { user } = route.params;
    // const [user, setUser] = useState({});
    // const [loading, setLoading] = useState(true);
    // useEffect(async () =>{
    //     const user = await AsyncStorage.getData('user');
    //     if(user) setUser(user);
    //     else{
    //       // console.log(user);
    //       const dbUser = await getUser(route.params.id);
    //       AsyncStorage.storeData('user', dbUser);
    //       setUser(dbUser);
    //     }
    //     setLoading(false);
    // },[]);
    const handleLogOut = async () =>{
      await AsyncStorage.storeData('user', null);
      resetUser();
      navigation.navigate('Login');
    }
    console.log('profile',route, user);

  // if(loading) return <Text> Loading ... </Text>
  return (
    <View>
      <DataContainter>
        <Title>Perfil de {user.name} {user.surname}</Title>
        <StyledText>Email: {user.email}</StyledText>
        <StyledText>Curso: {user.course}</StyledText>
        <StyledText>Direccion: {user.address}</StyledText>
        <StyledText>Telefono: {user.phone}</StyledText>
        <TouchableOpacity onPress={handleLogOut}>
          <Text style={{color: 'blue', marginTop: 30}}>Cerrar Sesion</Text>
        </TouchableOpacity >
      </DataContainter>

      
    </View>
  )
};

export default ProfileScreen;