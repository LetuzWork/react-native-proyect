import React, { useState } from 'react';
import { View,Text,TouchableOpacity} from 'react-native'; 
import styled from "styled-components/native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import { authUser } from '../db/users';
import userConfig from '../config/userConfig';
import AsyncStorage from "../utils/AsyncStorage";

const Container = styled.View`
  flex: 1;
  background: #eee;
  align-items: center;
  margin-top: 15px;
  /*justify-content: center;*/
`;
const Title = styled.Text`
  font-size: 30px;
  color: #112;
  /*justify-content: center;*/
`;
const FormatedTextInput = styled.View`
  display: flex;
  color: #112;
  width: 90%;
  margin: 10px;
  padding: 10px;
  border-bottom-color: #345;
  border-bottom-width: 1px ;
  border-radius: 10px;
  flex-direction: row;
`;
const FormatedTextInputField = styled.TextInput`
  font-size: 15px;
  width: 80%;
  margin-left: 10px;
`

const SubmitButton = styled.TouchableOpacity`
  padding: 20px;
  box-shadow: 0 0 10px #3333;
  background: #fff;
  width: 50%;
  border-radius: 200px;
  margin: 20px auto;

  opacity: ${({disabled})=>disabled?0.55:1};
`;
const SubmitButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const userLoginConfig = userConfig.filter(f => f.login);

const LoginScreen = ({navigation}) =>{
    const [user, setUser] = useState(userConfig);

    const updateUser = (key,value) => setUser({ ...user, [key]:value });
    
    const handleSubmit = async ()=> {
      const result = await authUser(user);
      // console.log(result);
      if(!result.error){
        await AsyncStorage.storeData("user", result.user);
        navigation.navigate('Landing');
      }
    }
    return (
        <Container>
            <Title>Inicio de Sesion</Title>
         {userLoginConfig.map(field => (
            <FormatedTextInput key={`f-${field.name}`}>
              <MaterialIcon name={field.icon} size={40} color='#345' />
              <FormatedTextInputField
                keyboardType={field.type}
                placeholder={field.label}
                onChangeText={value => updateUser(field.name, value)}
                value={user[field.name] || ''}
                secureTextEntry={field.secureTextEntry}
                required
              />
            </FormatedTextInput>
            ))}
            <SubmitButton onPress={handleSubmit} disabled={userLoginConfig.some(({name})=> !user[name])}>
              <SubmitButtonText>Iniciar</SubmitButtonText>
            </SubmitButton>
            <View style={{display: 'flex', flexDirection:'row'}}>
              <Text>¿Aun no tenes cuenta? </Text>
              <TouchableOpacity onPressOut={() =>  navigation.navigate('Register') }>
                <Text style={{color: 'blue'}}> Registrate Aquí</Text>
              </TouchableOpacity>
            </View>
        </Container>
    )
}

export default LoginScreen;