"use client";
import CartWidget from './CartWidget';

export default function Navbar() {

  const manejarClick = (categoria) => {
    localStorage.setItem('categoriaSeleccionada', categoria);
    window.location.reload()};

  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white p-4">
      <h1 className="text-xl font-bold" imna>
      <img src="https://img.freepik.com/vector-premium/diseno-logotipo-hermoso-unico-empresas-comercio-electronico-minorista_1287271-14561.jpg" alt="Logo del E-Commerce" className="h-8" />
      </h1>
      <ul className="flex space-x-4">
      
      <li><button onClick={() => manejarClick('electronica')}>Electrónica</button></li>
        <li><button onClick={() => manejarClick('ropa')}>Ropa</button></li>
        <li><button onClick={() => manejarClick('hogar')}>Hogar</button></li>
      </ul>
      <CartWidget />
    </nav>
  );
}