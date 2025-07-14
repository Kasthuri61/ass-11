import { useNavigate } from 'react-router-dom';

export default function GlassHero() {
  const navigate = useNavigate();
  const categories = ['Fashion', 'Electronics', 'Home', 'Beauty', 'Toys'];
  const products = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    price: (29.99 + i * 5).toFixed(2),
    img: `https://via.placeholder.com/150?text=Prod+${i + 1}`,
  }));

  return (
    <div className="relative min-h-screen bg-gray-800 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gray-800/60 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto py-16 px-4 text-center">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="mb-8 w-full max-w-md px-4 py-3 rounded-full bg-white/20 backdrop-blur-sm placeholder-white focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white transition"
        />

        {/* Categories */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => navigate(`/products?category=${c}`)}
              className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-opacity-30 transition"
            >
              {c}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              onClick={() => navigate(`/products/${p.id}`)}
              className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-20 transition"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="mx-auto mb-2 rounded"
              />
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-white/80">${p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
