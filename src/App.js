
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Seccion2 from './components/seccion-2';
import Seccion3 from './components/Seccion-3';
import Seccion4 from './components/Seccion-4';
import Seccion5 from './components/Seccion-5';
import Seccion6 from './components/Seccion-6';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tienda from './components/Tienda';
import Suscripcion from './components/Suscripcion';
import Contactos from './components/Contactos';
import Empresas from './components/Empresas';
import Nosotros from './components/Nosotros'

function App() {
  return (
    <div className="App">
      <body>
        <div id='container'>
          {/* <Nav/> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Nav />}>
                <Route path='tienda' element={<Tienda />} />
                <Route path='suscripcion' element={<Suscripcion />} />
                <Route path='empresas' element={<Empresas />} />
                <Route path='contacto' element={<Contactos />} />
                <Route path='nosotros' element={<Nosotros />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Seccion2 />
          <Seccion3 />
          <Seccion4 />
          <Seccion5 />
          <Seccion6 />
          <Footer />
        </div>
      </body>
    </div >
  );
}

export default App;
