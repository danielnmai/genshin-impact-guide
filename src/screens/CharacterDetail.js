import React, { useState } from 'react';
import {
  Container,
  Accordion,
  Content,
  H2,
  H3,
  Text,
  Icon,
} from 'native-base';
import { View } from 'react-native';
import styled from 'styled-components';
import { isEmpty } from 'lodash';

const dataArray = [
  { title: 'DPS', content: '' },
  { title: 'Support', content: '' },
];

const CharacterDetail = ({ route }) => {
  const { data } = route.params;
  const { dps, support } = data;
  console.log('support ', support);

  const [role, setRole] = useState({});

  console.log('role ', role);

  const renderHeader = (item, expanded) => {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#A9DAD6" }}>
      <Text style={{ fontWeight: "600" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    )

  }

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
                  <H3>Main Stats</H3>
                  {role.statPriority.mainStats.map((item, index) => (
                    <Text key={index}>{item}</Text>
                  ))}
                </>
                <>
                  <H3>Substats</H3>
                  {role.statPriority.subStats.map((item, index) => (
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
        expanded={[]}
        headerStyle={{ backgroundColor: '#b7daf8' }}
        contentStyle={{ backgroundColor: '#fff' }}
        renderContent={renderContent}
        renderHeader={renderHeader}
        onAccordionOpen={(item) => setRole(item.title === 'DPS' ? dps : support )}
        onAccordionClose={(item) => setRole({})}
      />
    </Container>
  );
};

export default CharacterDetail;
