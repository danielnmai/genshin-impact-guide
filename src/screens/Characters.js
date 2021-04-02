import React from 'react';
import { Container, Header, Content, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styled from 'styled-components';
import { Avatar } from '../components';
import CharacterData from '../data/CharacterData';

const StyledColumn = styled(Col)`
  height: 160px;
`;

const StyledContainer = styled(Container)`
  
`;

const renderRow = (charRow, index) => {
  console.log('charRow', charRow);
  return (
    <Grid key={index}>
      <StyledColumn>
        <Avatar data={charRow.length >= 1 ? charRow[0] : null} />
      </StyledColumn>
      <StyledColumn>
        <Avatar data={charRow.length >= 2 ? charRow[1] : null} />
      </StyledColumn>
      <StyledColumn>
        <Avatar data={charRow.length === 3 ? charRow[2] : null} />
      </StyledColumn>
    </Grid>
  );
};
const Characters = () => {
  // data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dataWithRows = [];

  while (CharacterData.length) {
    // dataWithRows = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    dataWithRows.push(CharacterData.splice(0, 3)); 
  }
  return (
    <StyledContainer>
      <Content>
        {dataWithRows.map((charRow, index) => renderRow(charRow, index))}
      </Content>
    </StyledContainer>
  );
};

export default Characters;
