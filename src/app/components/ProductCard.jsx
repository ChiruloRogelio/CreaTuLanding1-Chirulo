// src/components/ProductCard.jsx
export default function ProductCard({ title, price, image }) {
    return (
      <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition">
        <img src={image} alt={title} className="h-40 w-40 object-contain mb-4" />
        <h3 className="font-semibold text-lg text-center">{title}</h3>
        <p className="text-blue-600 font-bold mt-2">${price}</p>
      </div>
    );
  }
  