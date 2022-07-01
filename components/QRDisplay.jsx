
import { Text } from 'react-native'; 
import styled from 'styled-components/native';
// import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import QRCode from 'react-native-qrcode-svg';
import { useEffect } from 'react';
import AsyncStorage from '../utils/AsyncStorage';

const Container = styled.View`
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    z-index: 1;
    background: white;
    bottom: -100px;

    flex: 1;
    justify-content: center;
    align-items: center;
`
const QRContainer = styled.View`
    /* margin-top: -50px; */
`;
const TextContainer = styled.View`
    margin: 100px 50px;
    color: #000;
`;
const QRDisplay = () =>{
    useEffect(async ()=>{
        console.log( await AsyncStorage.getData('user'))
    })
    return (
        <Container>
            {/* <MaterialIcon name="qr-code-2" size={300} /> */}
            <QRContainer>
                <QRCode
                    value="45032905"
                    size={300}
                />
            </QRContainer>
            <TextContainer>
                <Text style={{fontSize: 20, textAlign: 'center'}}>
                    Muestre el Codigo QR en la parte superior para notificar su asistencia
                </Text>
            </TextContainer>
        </Container>
    )
}

export default QRDisplay;