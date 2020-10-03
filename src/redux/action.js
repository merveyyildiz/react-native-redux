export const add_Item = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item,
  };
};

export const delete_Item = (item) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: item,
  };
};
