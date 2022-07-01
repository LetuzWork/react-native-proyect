import React, { useState } from 'react';
import styled from "styled-components/native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import NewsContainer from "./NewsContainer";
import QRDisplay from "./QRDisplay";

const Container = styled.View`
  flex: 1;
  background: #eee;
  align-items: center;
  /*justify-content: center;*/
`;

const QRDisplayDisabler = styled.TouchableOpacity`
    position: absolute;
    top:0; left:0;
    height: 40%;
    width: 100%;
    z-index: 2;
`
const ButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 100px;
`;

const LandingButton = styled.TouchableOpacity`
  padding: 20px;
  border-radius: 50px;
  box-shadow: 0 0 10px #3333;
  background: #fff;
`;

export default function LandingPage({ navigation }) {
    const [displayQR, setDisplayQR] = useState(false);
  return (
    <Container>
    <QRDisplayDisabler onPress={()=> setDisplayQR(false)} />
      <NewsContainer />
      <ButtonsContainer>
        <LandingButton >
          <MaterialIcon name="check-box" size={40} onPress={() => navigation.navigate('Profile')}  />
        </LandingButton>
        <LandingButton style={{ marginBottom: 50 }} onPress={()=> setDisplayQR(true)}>
          <MaterialIcon name="qr-code-2" size={60} />
        </LandingButton>
        <LandingButton>
          <MaterialIcon name="today" size={40} />
        </LandingButton>
      </ButtonsContainer>
      {displayQR && <QRDisplay/>}
    </Container>
  );
}
