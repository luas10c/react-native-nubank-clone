import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)``;

export const Wrapper = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 10,
    paddingRight: 20,
  },
})``;

export const Item = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 20px;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: 13px;
  color: #ffffff;
`;
