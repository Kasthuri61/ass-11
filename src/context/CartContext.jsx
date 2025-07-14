// src/context/CartContext.jsx
import { createContext, useContext, useReducer } from 'react';

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, items: [...state.items, action.item] };
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.id),
      };
    default:
      return state;
  }
}

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);



