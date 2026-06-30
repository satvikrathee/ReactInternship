export const initialState = {
  cart: [],
  total: 0,
  discount:0
};
const calculateTotal=(cart,discount=0)=>{
    let total =cart.reduce((sum,item)=>sum+item.price*item.quantity,0)
    total=total-(total*discount)/100;
    return total
}
export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      let updatedCart;
      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        updatedCart = [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
      const total = updatedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      return {
        cart: updatedCart,
        total,
      };
    }

    case "INCREASE_QTY": {
      const updateCart = state.cart.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        cart: updateCart,
        total: calculateTotal(updateCart, state.discount),
      };
    }

    case "APPLY_COUPON": {
      return {
        ...state,
        discount: action.payload,
        total: calculateTotal(state.cart, action.payload),
      };
    }
    case "CLEAR_CART": {
      return {
        cart: [],
        total: 0,
        discount: 0,
      };
    }
    default:
      return state;
  }
}
