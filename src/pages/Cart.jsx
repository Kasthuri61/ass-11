// src/pages/Cart.jsx
import CartSidebar from '../components/CartSidebar';

export default function CartPage() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl p-6">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <CartSidebar />
      </div>
    </div>
  );
}

