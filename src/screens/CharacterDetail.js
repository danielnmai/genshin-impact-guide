import React, { useState } from 'react';
import {
  Container,
  Accordion,
  Content,
  H2,
  H3,
  Text,
} from 'native-base';
import styled from 'styled-components';
import { isEmpty } from 'lodash';

const dataArray = [
  { title: 'DPS', content: '' },
  { title: 'Support', content: '' },
];

const CharacterDetail = ({ route }) => {
  const { data } = route.params;
  const { dps, support } = data;

  const [role, setRole] = useState({});

  const renderContent = (content) => {
    return (
      <Content padder>
        {
          !isEmpty(role) &&
          (
            <>
              <>
                <H2>Weapon</H2>
                {role.weapon.map((item, index) => (
                  <Text key={index}>{item}</Text>
                ))}
              </>
              <>
                <H2>Artifact</H2>
                {role.artifact.map((item, index) => (
                  <Text key={index}>{item}</Text>
                ))}
              </>
              <>
                <H2>Stats Priority</H2>
                <>
                  <H3>Early Game</H3>
                  {role.statPriority.earlyGame.map((item, index) => (
                    <Text key={index}>{item}</Text>
                  ))}
                </>
                <>
                  <H3>Late Game</H3>
                  {role.statPriority.lateGame.map((item, index) => (
                    <Text key={index}>{item}</Text>
                  ))}
                </>
              </>
              <>
                <H2>Talent Priority</H2>
                {role.talentPriority.map((item, index) => (
                  <Text key={index}>{item}</Text>
                ))}
              </>
              <>
                <>
                  <H2>Notes</H2>
                  {role.notes.map((item, index) => (
                    <Text key={index}>{item}</Text>
                  ))}
                </>
              </>
            </>
          )
        }

      </Content>
    );
  };
  return (
    <Container>
      <Accordion
        dataArray={dataArray}
        icon="add"
        expandedIcon="remove"
        headerStyle={{ backgroundColor: '#b7daf8' }}
        contentStyle={{ backgroundColor: '#fff' }}
        renderContent={renderContent}
        onAccordionOpen={(item) => setRole(item.title === 'DPS' ? dps : support )}
        onAccordionClose={(item) => setRole({})}
      />
    </Container>
  );
};

export default CharacterDetail;
