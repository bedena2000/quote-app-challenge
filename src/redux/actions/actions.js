// Action Variables
import { ADD_AUTHOR } from '../actionsVariables/actionsVariables';
import { ADD_QUOTES_BY_AUTHOR } from '../actionsVariables/actionsVariables';

// Actions Function

export const addQuoteAndText = (info) => {
  return {
    type: ADD_AUTHOR,
    payload: info,
  };
};

export const addQuotesByAuthor = (info) => {
  return {
    type: ADD_QUOTES_BY_AUTHOR,
    payload: info,
  };
};
