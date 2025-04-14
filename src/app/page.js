import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

export default function Home() {
  return (
 <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </>
  );
}
