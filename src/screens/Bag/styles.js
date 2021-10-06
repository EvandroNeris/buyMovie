import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const TitleHeader = styled.Text`
  font-size: 25px;
  color: #E91D63;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const CartItem = styled.View`
  margin-top: 40px;
`;

export const ImageArea = styled.View`
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
  resize-mode: contain;
`;

export const TextArea = styled.View`
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 10px;
`;

export const Description = styled.Text`
  font-size: 20px;
  margin-left: 20px;
`;

export const EmptyMessage = styled.Text`
  font-size: 18px;
  text-align-center;
`;