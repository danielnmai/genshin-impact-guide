import React from 'react';
import {Container, Header, Content, Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import styled from 'styled-components';
import {Avatar} from '../components';
import CharacterData from '../data/CharacterData';

const StyledColumn = styled(Col)`
  background-color: orange;
  height: 160px;
`;

const renderRow = (charRow, index) => {
  console.log('charRow', charRow);
  return (
    <Grid key={index}>
      <StyledColumn>
        <Avatar data={charRow[0]} />
      </StyledColumn>
      <StyledColumn>
        <Avatar data={charRow[1]} />
      </StyledColumn>
      <StyledColumn>
        <Avatar data={charRow[2]} />
      </StyledColumn>
    </Grid>
  );
};
const Characters = () => {
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dataWithRows = [];

  console.log('data ', CharacterData[0]);

  while (CharacterData.length) {
    dataWithRows.push(CharacterData.splice(0, 3));
  }
  return (
    <Container>
      <Content>
        {dataWithRows.map((charRow, index) => renderRow(charRow, index))}
      </Content>
    </Container>
  );
};

export default Characters;
