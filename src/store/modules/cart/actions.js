export function addToCartRequest(id) {
  return (
    {
      type: '@Cart/ADD_REQUEST',
      id,
    }
  );
}

export function addToCartSuccess(product) {
  return (
    {
      type: '@Cart/ADD_SUCCESS',
      product,
    }
  );
}

export function removeToCart(id) {
  return (
    {
      type: '@Cart/REMOVE',
      id,
    }
  );
}

export function updateAmount(id, amount) {
  return (
    {
      type: '@Cart/UPDATE_AMOUNT',
      id,
      amount,
    }
  );
}
