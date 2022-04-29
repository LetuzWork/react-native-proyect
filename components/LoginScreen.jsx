import React, { useState } from 'react';
import { TextInput } from 'react-native'; 
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background: #eee;
  align-items: center;
  /*justify-content: center;*/
`;
const Title = styled.Text`
  font-size: 30px;
  color: #112;
  /*justify-content: center;*/
`;
const LoginTextInput = styled.TextInput`
  font-size: 30px;
  color: #112;
  /*justify-content: center;*/
`;

const userConfig = {
    name: null, surname: null, DNI:null, email: null,number: null, address: null
}

const LoginScreen = () =>{
    // const [name, setName] = useState();
    // const [surname, setSurname] = useState();
    // const [DNI, setDNI] = useState();
    // const [email, setEmail] = useState();
    // const [email, setEmail] = useState();
    const [user, setUser] = useState(userConfig);

    const updateUser = (key,value) => setUser({ ...user, [key]:value });
    
    return (
        <Container>
            <Title>Login</Title>
         <LoginTextInput
        onChangeText={value => updateUser("name", value)}
        value={user.name}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
        </Container>
    )
}

export default LoginScreen;