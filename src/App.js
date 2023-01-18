import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tienda from './Navbar/Tienda';
import Suscripcion from './Navbar/Suscripcion';
import Contactos from './Navbar/Contactos';
import Empresas from './Navbar/Empresas';
import Nosotros from './Navbar/Nosotros'
import Paginaprincipal from './Home/Paginaprincipal';
import CestaProvider from './Context/Cesta';
import CestaCompra from './Navbar/CestaCompra';
import IniciarSesion from './Navbar/IniciarSesion'

function App() {
  return (
    <div id='container'>
      <BrowserRouter>
        <CestaProvider>
          <Routes>
            <Route path="/" element={<Paginaprincipal />} />
            <Route path='/tienda' element={<Tienda />} />
            <Route path='/suscripcion' element={<Suscripcion />} />
            <Route path='/empresas' element={<Empresas />} />
            <Route path='/contacto' element={<Contactos />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/cesta' element={<CestaCompra />} />
            <Route path='/sesion' element={<IniciarSesion />} />

          </Routes>
        </CestaProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
