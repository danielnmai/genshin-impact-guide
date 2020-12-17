import React from 'react';
import {Container, Header, Content, Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import styled from 'styled-components';
import {Avatar} from '../components';

const StyledColumn = styled(Col)`
  background-color: orange;
  height: 160px;
`;

const renderRow = (charRow) => {
  return (
    <Grid>
      <StyledColumn>
        <Avatar text={charRow[0]} />
      </StyledColumn>
      <StyledColumn>
        <Avatar text={charRow[1]} />
      </StyledColumn>
      <StyledColumn>
        <Avatar text={charRow[2]} />
      </StyledColumn>
    </Grid>
  );
};
const Characters = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const dataWithRows = [];

  while (data.length) {
    dataWithRows.push(data.splice(0, 3));
  }
  return (
    <Container>
      <Content>{dataWithRows.map((charRow) => renderRow(charRow))}</Content>
    </Container>
  );
};

export default Characters;
