import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 30px;
  color: #846;
`;

export default function App() {
  return (
    <Container>
      <Title>Patas de mono</Title>
      <StatusBar style="auto" />
    </Container>
  );
}
