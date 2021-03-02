import React from 'react';
import { Image, Text } from 'react-native';
import { Container, Content, Card, CardItem } from 'native-base';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import AvatarCollection from '../data/AvatarCollection';

const StyledCardItem = styled(CardItem)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

const StyledImage = styled(Image)`
  width: 80%;
  height: 80%;
`;

const Avatar = ({ data }) => {
  const navigation = useNavigation();
  return (
    data &&
    <Container>
      <Content>
        <Card transparent>
          <StyledCardItem
            cardBody
            button
            onPress={() =>
              navigation.navigate('CharacterDetail', {
                name: 'Character Guide',
                data,
              })
            }>
            <StyledImage source={AvatarCollection[data.name]} resizeMode="contain" />
            <Text>{data.name}</Text>
          </StyledCardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default Avatar;
