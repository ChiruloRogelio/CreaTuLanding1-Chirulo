import { FaShoppingCart } from 'react-icons/fa';

export default function CartWidget() {
  const itemCount = 3; 

  return (
    <div className="relative flex items-center">
      <FaShoppingCart className="text-xl" />
      <span className="ml-1 text-sm font-semibold">{itemCount}</span>
    </div>
  );
}