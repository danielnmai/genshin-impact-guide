import React from 'react';
import { Image, Text } from 'react-native';
import { Container, Content, Card, CardItem } from 'native-base';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { capitalize } from 'lodash';

import AvatarCollection from '../data/AvatarCollection';

const StyledContainer = styled(Container)``;

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

const StyledContent = styled(Content)``;

const StyledCard = styled(Card)``;

const Avatar = ({ data }) => {
  const navigation = useNavigation();
  return (
    data &&
    <StyledContainer>
      <StyledContent>
        <StyledCard transparent>
          <StyledCardItem
            cardBody
            button
            onPress={() =>
              navigation.navigate('CharacterDetail', {
                name: capitalize(data.name),
                data,
              })
            }>
            <StyledImage source={AvatarCollection[data.name]} resizeMode="contain" />
            <Text>{capitalize(data.name)}</Text>
          </StyledCardItem>
        </StyledCard>
      </StyledContent>
    </StyledContainer>
  );
};

export default Avatar;
