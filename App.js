import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

import Header from "./components/Header";
import NewsContainer from "./components/NewsContainer";

const SafeAreaView = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === "android"
    ? StatusBar.currentHeight + "px"
    : 0};
`;

const Container = styled(SafeAreaView)`
  flex: 1;
  background: #fff;
  align-items: center;
  /*justify-content: center;*/
`;

// const Title = styled.Text`
//   font-size: 30px;
//   color: #846;
// `;

export default function App() {
  return (
    <Container>
      <Header />
      <NewsContainer />
      {/* <ButtonsContainer>
        <Attendance />
        <QRDisplayer />
        <Callendar />
      </ButtonsContainer> */}
    </Container>
  );
}
