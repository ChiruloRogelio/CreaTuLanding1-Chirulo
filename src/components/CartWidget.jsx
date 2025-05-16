import { FaShoppingCart } from 'react-icons/fa';

export default function CartWidget() {
  const itemCount = 3; 

  return (
    <div className="position-relative" style={{ width: '1.5rem', height: '1.5rem' }}>
      <FaShoppingCart className="fs-4" />
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        style={{ fontSize: '0.7rem' }}
      >
        {itemCount}
      </span>
    </div>
  );
}
