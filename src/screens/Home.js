import PropTypes from 'prop-types';
import React from 'react';
import { Button, Text, Container, Footer } from 'native-base';
import styled from 'styled-components';
import allCharacters from '../data/allCharacters.json';

const StyledContainer = styled(Container)`
  flex: 1;
  background-color: #ffff;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  align-self: center;
  margin: 10px;
  justify-content: center;
  width: 50%;
`;

const StyledText = styled(Text)`
  align-self: center;
`;

const Home = ({ navigation }) => {
	return (
		<StyledContainer>
			<StyledButton onPress={() => navigation.navigate('Characters')}>
        <StyledText>Characters Guide</StyledText>
      </StyledButton>
			<StyledButton>
        <StyledText>Resin Reminder</StyledText>
      </StyledButton>
      <Footer />   
      <StyledButton>
        <StyledText>Disclaimer</StyledText>
      </StyledButton>   
		</StyledContainer>
	);
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
