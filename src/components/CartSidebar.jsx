// src/components/CartSidebar.jsx
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const { state, dispatch } = useCart();

  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const changeQuantity = (item, delta) => {
    const newQty = (item.quantity || 1) + delta;
    if (newQty > 0) {
      dispatch({ type: 'UPDATE_QTY', id: item.id, quantity: newQty });
    } else {
      dispatch({ type: 'REMOVE', id: item.id });
    }
  };

  return (
    <div className="space-y-4">
      {state.items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        state.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-contain rounded"
            />
            <div className="flex-1">
              <h2 className="font-medium">{item.title}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
              <div className="flex items-center space-x-2 mt-1">
                <button
                  onClick={() => changeQuantity(item, -1)}
                  className="px-2 bg-gray-200 rounded"
                >–</button>
                <span>{item.quantity || 1}</span>
                <button
                  onClick={() => changeQuantity(item, 1)}
                  className="px-2 bg-gray-200 rounded"
                >+</button>
              </div>
            </div>
            <p className="font-semibold">
              ${(item.price * (item.quantity || 1)).toFixed(2)}
            </p>
          </div>
        ))
      )}

      {state.items.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
          <button className="mt-2 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

