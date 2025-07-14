import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { user } = useAuth();            // ✅ Check auth status
  const { dispatch } = useCart();        // ✅ Add to cart handler
  const navigate = useNavigate();

  const addToCart = () => {
    if (!user) {
      alert('Please login to add products to the cart.');
      return navigate('/login');
    }
    dispatch({ type: 'ADD', item: product });
  };

  const buyNow = () => {
    if (!user) {
      alert('Please login to buy products.');
      return navigate('/login');
    }
    dispatch({ type: 'ADD', item: product });
    navigate('/cart');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4"
      />
      <h2 className="text-lg font-medium mb-2">{product.title}</h2>
      <p className="text-xl font-semibold text-green-600 mb-4">
        ${product.price.toFixed(2)}
      </p>
      <div className="flex gap-2">
        <button
          onClick={addToCart}
          className="flex-1 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
        <button
          onClick={buyNow}
          className="flex-1 bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}


