
// import { Text } from 'react-native'; 
import styled from 'styled-components/native';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

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
    return (
        <Container>
            <MaterialIcon name="qr-code-2" size={300} />
        </Container>
    )
}

export default QRDisplay;