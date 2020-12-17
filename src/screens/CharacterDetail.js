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

const CharacterDetail = () => {
  const renderContent = () => {
    return (
      <Content>
        <Content>
          <H2>Weapon</H2>
          <Text>1. Skyward harp (5⭐) ~->= Rust R5*</Text>
          <Text>2. Rust R4 (4⭐)</Text>
          <Text>2. Amos Bow (5⭐)</Text>
          <Text>4. Viridescent Hunt (4⭐)</Text>
          <Text>5. Rust (4⭐)</Text>
          <Text>6. Blackcliff Warbow (4⭐)</Text>
          <Text>7. Prototype Crescent (4⭐)</Text>
        </Content>
        <Content>
          <H2>Artifact</H2>
          <Text>1. Noblesse (2-pcs) + Gladiator (2-pcs)</Text>
          <Text>2. Retracing Bolide (Full set)</Text>
          <Text>2. Noblesse (2-pcs) + Gambler (2-pcs)</Text>
          <Text>4. Gambler (Full Set)</Text>
          <Text>5. Wanderers Troupe (Full Set)</Text>
        </Content>
        <Content>
          <H2>Stats Priority</H2>
          <Content>
            <H3>Early Game</H3>
            <Text>1. ATK</Text>
            <Text>2. Crit Rate (≥ 50%)</Text>
            <Text>3. Crit Damage</Text>
            <Text>4. Energy Recharge</Text>
          </Content>
          <Content>
            <H3>Late Game</H3>
            <Text>1. Hydro Damage</Text>
            <Text>2. Crit Rate</Text>
            <Text>3. Crit Damage</Text>
            <Text>4. ATK</Text>
            <Text>5. Energy Recharge</Text>
          </Content>
        </Content>
        <Content>
          <H2>Talent Priority</H2>
          <Text>1. Foul Legacy: Raging Tide</Text>
          <Text>2. Normal Attack : Current Torrent</Text>
          <Text>3. Havoc: Obliteration</Text>
        </Content>
        <Content>
          <Content>
            <H2>Notes</H2>
            <Text>
              Use Retracing Bolide (Full set) if you can keep a shield on him,
              difficult to maintain which is why it's placed second.{'\n'}
              {'\n'}
              Hourglass - ATK %{'\n'}
              Goblet - Hydro %{'\n'}
              Headgear - Crit %{'\n'}
            </Text>
            <Text>
              If you use Childe's bow attacks more then his melee stance lvl his
              normal attack up first.
            </Text>
          </Content>
        </Content>
      </Content>
    );
  };
  return (
    <Container>
      <Content padder>
        <Accordion
          dataArray={dataArray}
          icon="add"
          expandedIcon="remove"
          headerStyle={{backgroundColor: '#b7daf8'}}
          contentStyle={{backgroundColor: '#fff'}}
          renderContent={renderContent}
        />
      </Content>
    </Container>
  );
};

export default CharacterDetail;
