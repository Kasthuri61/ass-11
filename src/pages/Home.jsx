import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(r => r.json())
      .then(data => setProducts(data));
  }, []);

  const categories = ['Fashion', 'Electronics', 'Home', 'Beauty', 'Toys'];

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-auto">
      <div className="relative z-10 p-8 max-w-6xl mx-auto">
        {/* Search & Category omitted for brevity */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.slice(0, 10).map(p => (
            <div
              key={p.id}
              onClick={() => navigate(`/products/${p.id}`)}
              className="cursor-pointer bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-opacity-70 transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="mx-auto mb-3 h-32 object-contain"
              />
              <h3 className="text-white font-semibold line-clamp-2">{p.title}</h3>
              <p className="text-gray-300">${p.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>
  );
}




