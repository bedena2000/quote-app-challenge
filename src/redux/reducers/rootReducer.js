import { combineReducers } from 'redux';

// Reducers
import dataReducer from './dataReducer';
import quotesReducer from './quotesReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  quotes: quotesReducer,
});

export default rootReducer;
