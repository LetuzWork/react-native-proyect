import styled from "styled-components/native";
import { Platform, StatusBar, TouchableOpacity } from "react-native";

import Header from "./components/Header";
import NewsContainer from "./components/NewsContainer";

// import MaterialIcon from "react-google-material-icons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
// import Icon from "react-native-vector-icons/MaterialIcons";

const SafeAreaView = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === "android"
    ? StatusBar.currentHeight + "px"
    : 0};
`;

const Container = styled(SafeAreaView)`
  flex: 1;
  background: #eee;
  align-items: center;
  /*justify-content: center;*/
`;

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

export default function App() {
  return (
    <Container>
      <Header />
      <NewsContainer />
      <ButtonsContainer>
        {/* <MaterialIcon name="check_box" size="40px" color="white" /> */}
        {/* <Icon name="check-box" size={36} color="#fff" /> */}
        <LandingButton>
          <MaterialIcon name="check-box" size={40} />
        </LandingButton>
        <LandingButton style={{ marginBottom: 50 }}>
          <MaterialIcon name="qr-code-2" size={60} />
        </LandingButton>
        <LandingButton>
          <MaterialIcon name="today" size={40} />
        </LandingButton>
      </ButtonsContainer>
    </Container>
  );
}
