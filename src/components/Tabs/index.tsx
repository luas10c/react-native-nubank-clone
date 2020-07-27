import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Wrapper, Item, Label } from './styles';

const Tabs: React.FC<any> = ({ translateY }) => {
  const items = [
    { label: 'Indicar amigos', iconName: 'person-add' },
    { label: 'Cobrar', iconName: 'chat-bubble-outline' },
    { label: 'Depositar', iconName: 'arrow-downward' },
    { label: 'Transferir', iconName: 'arrow-upward' },
    { label: 'Bloquear cartão', iconName: 'lock' },
  ];

  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      }}>
      <Wrapper>
        {items.map((item, index) => (
          <Item key={index}>
            <MaterialIcons name={item.iconName} color="#FFFFFF" size={24} />
            <Label>{item.label}</Label>
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Tabs;
