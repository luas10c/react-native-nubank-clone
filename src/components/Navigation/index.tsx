import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Code,
  Wrapper,
  Item,
  Label,
  SignOutButton,
  SignOutButtonText,
} from './styles';

const Navigation: React.FC<any> = ({ translateY }) => {
  const items = [
    { label: 'Me ajuda', iconName: 'help-outline' },
    { label: 'Perfil', iconName: 'person-outline' },
    { label: 'Configurar cartão', iconName: 'credit-card' },
    { label: 'Configurações do app', iconName: 'smartphone' },
  ];

  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode
          value="https://github.com/luas1"
          size={80}
          backgroundColor="#FFFFFF"
          color="#8b10ae"
        />
      </Code>
      <Wrapper>
        {items.map((item, index) => (
          <Item key={index}>
            <MaterialIcons name={item.iconName} color="#FFFFFF" size={20} />
            <Label>{item.label}</Label>
          </Item>
        ))}
      </Wrapper>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sair do app</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
};

export default Navigation;
