import React, { useState } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native'; 
import styled from "styled-components/native";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {Picker} from '@react-native-picker/picker';

import { addUser } from '../db/users';
import userConfig from '../config/userConfig';


const Container = styled.View`
  flex: 1;
  background: #eee;
  align-items: center;
  max-width: 400px;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 20px;
  color: #112;
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

const RegisterScreen = ({ navigation }) =>{
    const [user, setUser] = useState({});

    const updateUser = (key,value) => {
      setUser({ ...user, [key]:value })
    };
    const handleSubmit = async () =>{
      const result = await addUser(user);
      console.log(result);
      navigation.navigate('Login');
    };
    return (
        <Container>
          <Title>Registro</Title>
          <ScrollView>
            {userConfig.map(field => (
            <FormatedTextInput key={`f-${field.name}`}>
              <MaterialIcon name={field.icon} size={40} color='#345' />
              {field.type === 'dropdown'
              ?<Picker
                selectedValue={user[field.name]}
               onValueChange={value => updateUser(field.name, value)}
                style={{width: "80%", marginLeft: 10}}>
                {field.options.map(option => <Picker.Item key={option} label={option} value={option} />)}
                </Picker>
              :<FormatedTextInputField
                keyboardType={field.type}
                placeholder={field.label}
                onChangeText={value => updateUser(field.name, value)}
                value={user[field.name] || ''}
                secureTextEntry={field.secureTextEntry}
                required
              />
              }
            </FormatedTextInput>
            ))}
            <SubmitButton onPress={handleSubmit} disabled={userConfig.some(({name})=> !user[name])}>
              <SubmitButtonText>Registrarse</SubmitButtonText>
            </SubmitButton>
            <View style={{display: 'flex', flexDirection:'row'}}>
              <Text>¿Ya tenes cuenta? </Text>
              <TouchableOpacity onPressOut={() => navigation.navigate('Login')}>
                <Text style={{color: 'blue', marginBottom: 50,}}> Inicia Sesion Aquí</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          

        </Container>
    )
}

export default RegisterScreen;