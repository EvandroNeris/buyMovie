import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute  } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';

import {
  BackGroundImage,
  Container,
  Header,
  BackButton,
  Body,
  MovieTitle,
  VoteAverageArea,
  VoteAverageText,
  DescriptionArea,
  DescriptionText,
  CustomButton,
  CustomButtonText,
  Row,
  GenreArea,
  GenreText
} from './styles';

import Api from '../../services/movies';
import { handleBuildEntireImageUrl } from '../../utils/functions';
import { defaultError } from '../../utils/errorHandler';

import Star from '../../assets/star.svg';
import ArrowLeft from '../../assets/arrow-left.svg';

import * as actions from '../../actions/moviesList';
import { GET_MOVIES_LIST } from '../../utils/constants';

export default () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params;

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    handleLoadMovieDetails();
  }, [id]);

  const handleLoadMovieDetails = async () => {
    const response = await Api.getMovieDetails(id);

    if (response && response.success === false) {
      defaultError();
      return;
    }

    setMovieDetails(response);
  }

  const goBack = () => {
    navigation.goBack();
  }

  const handleAddMovieToBag = async () => {
    dispatch({
      type: GET_MOVIES_LIST,
      payload: movieDetails
    });
  }

  const { backdrop_path, title, vote_average, genres, overview } = movieDetails;

  return (
    <Container>
        <Header>
          <BackGroundImage
            source={{ uri: handleBuildEntireImageUrl(backdrop_path) }}
            imageStyle={{ opacity: 0.8 }}
          >
            <LinearGradient
              colors={[
                'rgba(9,14,48,0.50)',
                'rgba(9,14,48, 1)',
              ]}
              style={{ flex: 1 }}
            >
              <BackButton onPress={() => goBack()}>
                <ArrowLeft height="30" width="30" fill="rgba(255, 255, 255, 0.6)" />
              </BackButton>
            </LinearGradient>
          </BackGroundImage>
        </Header>

        <Body>
          <MovieTitle>{ title }</MovieTitle>
          
          <Row>
            <VoteAverageArea>
              <Star width="24" height="24" fill="#DFA60E" />
              <VoteAverageText>{ vote_average }</VoteAverageText>
            </VoteAverageArea>

            <GenreArea>
              {
                genres && genres.map((genre, key) => (
                  <GenreText key={key}> { genre.name }</GenreText>
                ))
              }
            </GenreArea>
          </Row>

          <DescriptionArea>
            <DescriptionText>{ overview }</DescriptionText>
          </DescriptionArea>

          <CustomButton onPress={() => handleAddMovieToBag()}>
            <CustomButtonText>Adicionar ao Carrinho</CustomButtonText>
          </CustomButton>
        </Body>
    </Container>
  )
}