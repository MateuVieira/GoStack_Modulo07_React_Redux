import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/image/logo.svg';

export default function Header() {
  return (
    <Container >
      <Link>
        <img src={logo} alt="Rocktshoes" />
      </Link>

      <Cart>
        <div>
          <strong>Meu carrinho</strong>
          <span>0 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
