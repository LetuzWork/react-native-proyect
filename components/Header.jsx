import styled from "styled-components/native";
import { Text} from 'react-native'; 

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
                <Text>Account</Text>
            </AccountButton>
        </HeaderContainer>
    )
}

export default Header;