const initialState = [];

const quotesReducer = (state = initialState, action) => {
  switch (action.payload) {
    case 'add/quotes':
      return [...action.payload];
    default:
      return state;
  }
};

export default quotesReducer;
