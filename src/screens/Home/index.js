import React, { useEffect } from 'react';

import {
  Container
} from './styles';

import Api from '../../services/movies';

export default () => {

  useEffect(() => {
    handleLoadMovies();
  }, []);

  const handleLoadMovies = async () => {
    const response = await Api.searchMovies(1);

    console.log(response);
  }

  return (
    <Container>

    </Container>
  )
}