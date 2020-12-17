import React from 'react';
import {Image} from 'react-native';
import {Container, Content, Card, CardItem} from 'native-base';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import avatar from '../assets/avatars/Childe.png';

const StyledCardItem = styled(CardItem)`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

const StyledImage = styled(Image)`
  width: 80%;
`;

const Avatar = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <Card transparent>
          <StyledCardItem
            cardBody
            button
            onPress={() =>
              navigation.navigate('CharacterDetail', {name: 'Character Guide'})
            }>
            <StyledImage source={avatar} resizeMode="contain" />
          </StyledCardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default Avatar;
