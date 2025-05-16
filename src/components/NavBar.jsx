"use client";
import CartWidget from './CartWidget';

export default function Navbar() {

  const manejarClick = (categoria) => {
    localStorage.setItem('categoriaSeleccionada', categoria);
    window.location.reload()};

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
    <div className="container-fluid d-flex justify-content-between align-items-center">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img
          src="https://img.freepik.com/vector-premium/diseno-logotipo-hermoso-unico-empresas-comercio-electronico-minorista_1287271-14561.jpg"
          alt="Logo del E-Commerce"
          className="d-inline-block align-text-top"
          style={{ height: '32px' }}
        />
        <span className="ms-2 fw-bold">E-Commerce</span>
      </a>
  
      <ul className="navbar-nav d-flex flex-row gap-3 mb-0">
        <li className="nav-item">
          <button className="btn btn-link nav-link text-white" onClick={() => manejarClick('electronica')}>
            Electrónica
          </button>
        </li>
        <li className="nav-item">
          <button className="btn btn-link nav-link text-white" onClick={() => manejarClick('ropa')}>
            Ropa
          </button>
        </li>
        <li className="nav-item">
          <button className="btn btn-link nav-link text-white" onClick={() => manejarClick('hogar')}>
            Hogar
          </button>
        </li>
      </ul>
  
      <CartWidget />
    </div>
  </nav>
  
  );
}