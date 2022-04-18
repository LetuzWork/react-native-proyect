import styled from "styled-components/native";
// import { Text } from 'react-native'; 

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    margin-bottom: 5px;
    background: #846;
`;
const Title = styled.Text`
  font-size: 30px;
  color: #fff;
`;
const AccountButton = styled.TouchableOpacity`
    position: absolute;
    right: 15px;
    
`;

const Header = () =>{
    return (
        <HeaderContainer>
            <Title>Batsy</Title>
            <AccountButton>
                <MaterialIcon name="person" size={36} color="#fff" />
            </AccountButton>
        </HeaderContainer>
    )
}

export default Header;