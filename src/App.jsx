import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";
import Error404 from "./components/Error404";
function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
          <Route path="/item/:itemId" element={<ProductDetail/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
