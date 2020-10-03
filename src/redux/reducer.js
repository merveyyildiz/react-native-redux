const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id != action.payload.id);
  }
  return state;
};
export default reducer;
