
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import {
  productosElectronica,
  productosDeportes,
  productosHogar
} from '../data/products';

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const categoria = localStorage.getItem('categoriaSeleccionada') || 'electronica';

    let productos = [];

    if (categoria === 'ropa') {
      productos = productosDeportes;
    } else if (categoria === 'hogar') {
      productos = productosHogar;
    } else {
      productos = productosElectronica;
    }

    setProducts(productos);
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">{greeting}</h2>
      <div className="row">
        {products.map((prod) => (
          <div key={prod.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <ProductCard
              title={prod.title}
              price={prod.price}
              image={prod.image}
              id={prod.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
