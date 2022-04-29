import { Text } from 'react-native';
import React, { useEffect, useState } from 'react';

import { getUser } from '../db/users';
import AsyncStorage from '../utils/AsyncStorage';

const ProfileScreen = ({navigate, route}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(async () =>{
        const user = await AsyncStorage.getData('user');
        console.log(user);
        if(user) setUser(user);
        else{
          const dbUser = await getUser(route.params.id);
          AsyncStorage.storeData('user', dbUser);
          setUser(dbUser);
        }
        setLoading(false);
    },[]);

  if(loading) return <Text> Loading ... </Text>
  return <Text>This is {user.name}'s profile</Text>;
};

export default ProfileScreen;