import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, ContentHigher, Logo, FirstName } from './styles';

const Header = () => {
  return (
    <Container>
      <ContentHigher>
        <Logo source={require('../../assets/Nubank_Logo.png')} />
        <FirstName>Luciano</FirstName>
      </ContentHigher>
      <MaterialIcons name="keyboard-arrow-down" color="#FFFFFF" size={20} />
    </Container>
  );
};

export default Header;
