import styled from 'styled-components/native';

export const BackGroundImage = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #090E30;
`;

export const Header = styled.View`
  height: 200px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 30px 40px;
`;

export const Body = styled.View`
  position: absolute;
  top: 100px;
  padding: 40px;
`;

export const MovieTitle = styled.Text`
  color: white;
  font-size: 35px;
  font-weight: bold;
`;

export const VoteAverageArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;


export const VoteAverageText = styled.Text`
  color: #DFA60E;
  margin-left: 5px;
`;

export const DescriptionArea = styled.View`
  margin-top: 20px;
`;

export const DescriptionText = styled.Text`
  color: white;
  font-size: 18px;
`;

export const CustomButton = styled.TouchableOpacity`
  background-color: #E91D63;
  height: 60px;
  width: 100%;
  justify-content: center;
  border-radius: 10px;
  margin-top: 50px;
`;

export const CustomButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 18px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GenreArea = styled.View`
  flex-direction: row;
  height: 100%;
  align-items: center;
  padding-top: 10px;
`;

export const GenreText = styled.Text`
  color: white;
  font-size: 16px;
`;