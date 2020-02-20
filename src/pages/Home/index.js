import React, { useState, useEffect } from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import { useSelector, useDispatch } from 'react-redux';

import { ProductList } from './styles';
import api from '../../server/api';

import * as CartActions from '../../store/modules/cart/actions';

const Home = () => {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state => state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}));

  const dispactch = useDispatch();

  useEffect(() => {
    const loadPorduct = async () => {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormated: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadPorduct();
  }, []);

  const handleAddProduct = id => {
    dispactch(CartActions.addToCartRequest(id));
  }

  return (
    <ProductList >
      {products.map(product => (
        <li key={product.id}>
          <img
            src={product.image}
            alt={product.title}
          />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>

          <button
            type='button'
            onClick={() => handleAddProduct(product.id)}
          >
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              {amount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}


export default Home;
