import types from "../constants";

let initstate = {
  cartItems: [],
};

export default function (state = initstate, action) {
  let { type, payload } = action;
  switch (type) {
    case types.CART_LIST:
      return {
        ...state,
        cartItems: payload,
      };
    case types.ADD_ITME_INTO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    case "REMOVE_ITEM_FROM_CART":
      let remainingItems = state.cartItems.filter((item, ind) => {
        return ind !== payload ? item : null;
      });
    return {
      ...state,
      cartItems: [...remainingItems],
    };

    default:
      return state;
  }
}
