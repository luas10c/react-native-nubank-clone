import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Animated } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #8b10ae;
  padding-top: ${Constants.statusBarHeight}px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333333;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background-color: #eeeeee;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333333;
`;
