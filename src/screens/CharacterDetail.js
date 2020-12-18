import React from 'react';
import {
  Container,
  Accordion,
  Content,
  Header,
  H1,
  H2,
  H3,
  Text,
} from 'native-base';
import styled from 'styled-components';
import {Avatar} from '../components';

const dataArray = [
  {title: 'DPS', content: ''},
  {title: 'Support', content: ''},
];

const CharacterDetail = ({route}) => {
  const {data} = route.params;

  const {dps, support} = data;

  console.log('data in c detail ', data);
  const renderContent = () => {
    return (
      <Content>
        <>
          <H2>Weapon</H2>
          {dps.weapon.map((item, index) => (
            <Text key={index}>{item.name}</Text>
          ))}
        </>
        <>
          <H2>Artifact</H2>
          {dps.artifact.map((item, index) => (
            <Text key={index}>{item.name}</Text>
          ))}
        </>
        <>
          <H2>Stats Priority</H2>
          <>
            <H3>Early Game</H3>
            {dps.statPriority.earlyGame.map((item, index) => (
              <Text key={index}>{item.name}</Text>
            ))}
          </>
          <>
            <H3>Late Game</H3>
            {dps.statPriority.lateGame.map((item, index) => (
              <Text key={index}>{item.name}</Text>
            ))}
          </>
        </>
        <>
          <H2>Talent Priority</H2>
          {dps.talentPriority.map((item, index) => (
            <Text key={index}>{item.name}</Text>
          ))}
        </>
        <>
          <>
            <H2>Notes</H2>
            {dps.notes.map((item, index) => (
              <Text key={index}>{item.name}</Text>
            ))}
          </>
        </>
      </Content>
    );
  };
  return (
    <Container>
      <Accordion
        dataArray={dataArray}
        icon="add"
        expandedIcon="remove"
        headerStyle={{backgroundColor: '#b7daf8'}}
        contentStyle={{backgroundColor: '#fff'}}
        renderContent={renderContent}
      />
    </Container>
  );
};

export default CharacterDetail;
