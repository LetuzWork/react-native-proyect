import styled from "styled-components/native";
// import { Text } from 'react-native'; 

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from "react-native-safe-area-context";

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

const Header = ({navigation}) =>{
    return (
        <SafeAreaView>
        <HeaderContainer>
            <Title>Batsy</Title>
            <AccountButton onPress={() => navigation.navigate('Profile', { id: '45032905' })}>
                <MaterialIcon name="person" size={36} color="#fff" />
            </AccountButton>
        </HeaderContainer>
        </SafeAreaView>
    )
}

export default Header;