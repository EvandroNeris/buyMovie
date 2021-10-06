import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { handleBuildEntireImageUrl } from '../../utils/functions';

import {
  Container,
  TitleHeader,
  CartItem,
  ImageArea,
  Image,
  TextArea,
  Title,
  Description,
  EmptyMessage
} from './styles';

export default (value) => {
  
  const movies = useSelector(state => state)

  return (
    <Container>
      <TitleHeader>Sacola</TitleHeader>

      {
        movies.length > 0 ? movies.map((movie, key) => (
          <CartItem key={key}>
            <ImageArea>
              <Image source={{ uri: handleBuildEntireImageUrl(movie.poster_path) }} />
            </ImageArea>

            <TextArea>
              <Title>{ movie.title }</Title>
              <Description>{ movie.overview }</Description>
            </TextArea>
          </CartItem>
        )) : (
          <EmptyMessage>A sacola está vazia ;)</EmptyMessage>
        )
      }
    </Container>
  );
}
