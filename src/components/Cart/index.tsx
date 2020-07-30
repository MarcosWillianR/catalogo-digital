import React, { useState, useCallback, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { Container, MainContainer, FooterContainer } from './styles';

interface CartProps {
  handleRemoveCart(): void;
  isCartActive?: boolean;
}

const Cart: React.FC<CartProps> = ({ handleRemoveCart, isCartActive }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Container isCartActive={isCartActive}>
      <header>
        <p>Minha seleção de produtos</p>
        <button type="button" onClick={handleRemoveCart}>
          <MdClose color="#606060" size={24} />
        </button>
      </header>

      <MainContainer>
        {!cartItems.length && <p>Não existem itens no carrinho de compras!</p>}
      </MainContainer>

      <FooterContainer>
        <p>0 item. Preço total: 0,00 R$</p>

        <button type="button">
          Enviar para Consultor(a) Jequiti pelo WhatsApp
        </button>
        <button type="button">Encontrar Consultor(a) Jequiti</button>
      </FooterContainer>
    </Container>
  );
};

export default Cart;
