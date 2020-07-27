import styled from 'styled-components/native';
import { Animated, StyleSheet } from 'react-native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #ffffff;
  padding: 10px;
  align-self: center;
`;

export const Wrapper = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const Item = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${StyleSheet.hairlineWidth}px;
`;

export const Label = styled.Text`
  font-size: 15px;
  color: #ffffff;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  margin-top: 15px;
  margin-bottom: ${StyleSheet.hairlineWidth}px;
`;

export const SignOutButtonText = styled.Text`
  font-weight: bold;
  font-size: 13px;
  color: #ffffff;
`;
