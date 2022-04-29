
// import { Text } from 'react-native'; 
import styled from 'styled-components/native';
// import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import QRCode from 'react-native-qrcode-svg';
import { useEffect } from 'react';
import AsyncStorage from '../utils/AsyncStorage';

const Container = styled.View`
    position: absolute;
    height: 80%;
    width: 100%;
    border-radius: 100px;
    z-index: 1;
    background: white;
    bottom: -100px;

    flex: 1;
    justify-content: center;
    align-items: center;

`
const QRDisplay = () =>{
    useEffect(async ()=>{
        console.log( await AsyncStorage.getData('user'))
    })
    return (
        <Container>
            {/* <MaterialIcon name="qr-code-2" size={300} /> */}
            <QRCode
                value="45032905"
                size={300}
            />
        </Container>
    )
}

export default QRDisplay;