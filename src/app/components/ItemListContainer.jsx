
//TECNOLOGIA
//Notebook
// https://http2.mlstatic.com/D_NQ_NP_966370-MLA82008995148_022025-O.webp
//https://http2.mlstatic.com/D_NQ_NP_2X_712017-MLA81506431064_012025-F.webp
//https://http2.mlstatic.com/D_NQ_NP_644888-MLA82451690623_022025-O.webp
//https://http2.mlstatic.com/D_NQ_NP_903744-MLU79306789013_092024-O.webp

//Tablet
//https://http2.mlstatic.com/D_NQ_NP_926564-MLU77327264668_072024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_840968-MLU79383081217_092024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_633368-MLA83185238769_032025-O.webp
//https://http2.mlstatic.com/D_NQ_NP_918929-MLA80155496979_102024-O.webp

//AllInOne
//https://http2.mlstatic.com/D_NQ_NP_641581-MLA81805940314_012025-O.webp
//https://http2.mlstatic.com/D_NQ_NP_999331-MLA79669654383_092024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_617060-MLA81335510937_122024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_640409-MLA81118143952_122024-O.webp


//Deportes y Fitnes
//Mochilas
//https://http2.mlstatic.com/D_NQ_NP_868892-MLU77754874112_072024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_631024-MLA82163121045_012025-O.webp
//https://http2.mlstatic.com/D_NQ_NP_991844-MLU79040362860_092024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_965587-MLA82109554234_022025-O.webp

//Zapatillas
//https://http2.mlstatic.com/D_NQ_NP_894014-MLA81872928703_012025-O.webp
//https://http2.mlstatic.com/D_NQ_NP_909622-MLA82664775579_022025-O.webp
//https://http2.mlstatic.com/D_NQ_NP_920059-MLA81230417484_122024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_953921-MLA82641847771_022025-O.webp

//Botines
//https://http2.mlstatic.com/D_NQ_NP_613647-MLA81497741089_122024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_823553-MLA81498354347_122024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_786105-MLA81230301582_122024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_901877-MLA82527707955_022025-O.webp



//HOGAR
//https://http2.mlstatic.com/D_NQ_NP_683298-MLA83307239036_042025-O.webp
//https://http2.mlstatic.com/D_NQ_NP_748192-MLA53582903699_022023-O.webp
//https://http2.mlstatic.com/D_NQ_NP_818326-MLA76450898292_052024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_693421-MLA80136959516_112024-O.webp

//https://http2.mlstatic.com/D_NQ_NP_901079-MLU74128597183_012024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_916363-MLU78388403657_082024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_696400-MLA80884375169_112024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_819659-MLA83545422027_042025-O.webp


//https://http2.mlstatic.com/D_NQ_NP_940728-MLU72825479079_112023-O.webp
//https://http2.mlstatic.com/D_NQ_NP_619102-MLA74650711102_022024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_774414-MLA81633524907_122024-O.webp
//https://http2.mlstatic.com/D_NQ_NP_652264-MLA45668379596_042021-O.webp

"use client";

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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">{greeting}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            title={prod.title}
            price={prod.price}
            image={prod.image}
          />
        ))}
      </div>
    </div>
  );
}
