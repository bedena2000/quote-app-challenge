const initialState = {
  author: '',
  quote: '',
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add/quoteAndAuthor':
      return {
        author: action.payload.author,
        quote: action.payload.quote,
        authorSlug: action.payload.authorSlug,
      };
    default:
      return state;
  }
};

export default dataReducer;
