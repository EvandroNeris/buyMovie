import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  CardMovie,
  Title,
  ImageArea,
  Image,
  MovieTitle,
  ReleaseDate,
  Row
} from './styles';

import Api from '../../services/movies';
import { handleBuildEntireImageUrl } from '../../utils/functions';
import { defaultError } from '../../utils/errorHandler';

export default () => {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    handleLoadMovies();
  }, []);

  const handleLoadMovies = async () => {
    const response = await Api.searchMovies(1);

    if (response && response.success === false) {
      defaultError();
      return;
    }
    
    setMovies(response.results);
  }

  const handleFormatDate = (currentDate) => {
    const separatedDate = currentDate.split('-');
    return `${separatedDate[2]}/${separatedDate[1]}/${separatedDate[0]}`;
  }

  const handleNavigate = movieId => {
    navigation.navigate('MovieDetails', { id: movieId });
  }

  return (
    <Container>
      <Title>Lista de Filmes</Title>
      <Row>
        {
          movies && movies.map(({ id, title, release_date, poster_path }, key) => (
            <CardMovie key={key} onPress={() => handleNavigate(id)}>
              <ImageArea>
                <Image source={{ uri: handleBuildEntireImageUrl(poster_path) }} />
              </ImageArea>
              <MovieTitle>{ title }</MovieTitle>
              <ReleaseDate>{ handleFormatDate(release_date) }</ReleaseDate>
            </CardMovie>
          ))
        }
      </Row>
    </Container>
  )
}