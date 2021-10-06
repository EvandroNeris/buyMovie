import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #E91D63;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const CardMovie = styled.TouchableOpacity`
  height: 350px;
  width: 48%;
`;

export const ImageArea = styled.View`
  width: 100%;
  height: 250px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const MovieTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
`;

export const ReleaseDate = styled.Text`
  font-size: 18px;
`;