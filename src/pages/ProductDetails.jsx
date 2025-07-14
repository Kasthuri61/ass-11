import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(r => r.json()).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading…</p>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <img src={product.image} alt="" className="h-64 mx-auto"/>
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 font-semibold">${product.price}</p>
      <div className="mt-4 flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch({ type: 'ADD', item: product })}
        >
          Add to cart
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={() => nav(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
