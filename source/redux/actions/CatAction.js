 
import types from '../constants';
import {Reducer} from 'redux';

export const addItemInCart = (item) => async (dispatch) => {
    dispatch({
      types:ADD_ITME_INTO_CART,
      payload: item
    })
};
 
