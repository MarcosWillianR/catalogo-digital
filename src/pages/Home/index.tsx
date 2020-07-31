import React, { useState, useEffect, useCallback } from 'react';
import { MdKeyboardArrowRight, MdLastPage } from 'react-icons/md';
import Header from '../../components/Header';
import Cart from '../../components/Cart';

import {
  Container,
  MainContainer,
  DescriptionContainer,
  ImageContainer,
  DescriptionTitle,
  DescriptionSubTitle,
  QuestionText,
  ListDescriptions,
  ListDescriptionItem,
  BottomText,
  ActionText,
  IconsContainer,
} from './styles';

const Home: React.FC = () => {
  const [isCartActive, setIsCartActive] = useState(false);

  const handleShowMainContainer = useCallback(() => {
    return (
      <>
        <DescriptionContainer>
          <DescriptionTitle>Catálogo Digital Jequiti</DescriptionTitle>

          <DescriptionSubTitle>
            Ficou ainda mais fácil
            <strong>
              comprar on-line com um (a) Consultor(a) Jequiti pelo Whatsapp.
            </strong>
          </DescriptionSubTitle>

          <QuestionText>Como funciona?</QuestionText>

          <ListDescriptions>
            <ListDescriptionItem>
              Navegue pelas páginas do catálogo digital e selecione os produtos
              que deseja comprar clicando no ícone do carrinho de compras.
            </ListDescriptionItem>
            <ListDescriptionItem>
              Assim que terminar de escolher seus produtos envie a lista para um
              (a) Consultor (a) Jequiti e aguarde o retorno para combinar
              direitinho a forma de pagamento e entrega segura.
            </ListDescriptionItem>
          </ListDescriptions>

          <BottomText>Boa leitura e boas compras!</BottomText>
          <ActionText>
            Não conhece um(a) Consultor(a) Jequiti? Clique
            <button type="button">Aqui</button>
          </ActionText>
        </DescriptionContainer>

        <ImageContainer>
          <img src="https://cdn.ipaper.io/iPaper/Papers/461c127b-5fce-4204-86ca-e7fc17cb7153/Pages/1/Zoom.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uaXBhcGVyLmlvL2lQYXBlci9QYXBlcnMvNDYxYzEyN2ItNWZjZS00MjA0LTg2Y2EtZTdmYzE3Y2I3MTUzL1BhZ2VzLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1OTYyMDQ0MjN9fX1dfQ__&Signature=cnq47scjJ201~IKqBcnSp9DIbuVa~T4gZPECY6ievrv8AL6JwLOWNN8WrUvD~6cIG38gxqVpzYs0WshvTRUjp-UIk~qQ4D5AKoLdgD8rNEBv9H7Vrb42O8F~Hfohl2pBeN2lZGELEo4NH-BojzcX~hQ9jup3DLs5AI8gcgAaUqQ_&Key-Pair-Id=APKAIPGQN6BDBMBZ2LCA" />

          <IconsContainer>
            <button type="button" onClick={() => console.log('ULTIMA PAGINA')}>
              <MdLastPage size={42} color="#000" />
            </button>

            <button type="button" onClick={() => console.log('PRÓXIMA PAGINA')}>
              <MdKeyboardArrowRight size={64} color="#000" />
            </button>
          </IconsContainer>
        </ImageContainer>
      </>
    );
  }, []);

  return (
    <>
      <Container isCartActive={isCartActive}>
        <Header handleToggleCart={() => setIsCartActive(!isCartActive)} />

        <MainContainer>{handleShowMainContainer()}</MainContainer>
      </Container>
      <Cart
        isCartActive={isCartActive}
        handleRemoveCart={() => setIsCartActive(false)}
      />
    </>
  );
};

export default Home;
