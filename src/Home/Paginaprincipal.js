import Nav from "../seccion/Nav";
import Seccion2 from "../seccion/seccion-2";
import Seccion3 from "../seccion/Seccion-3";
import Seccion4 from "../seccion/Seccion-4";
import Seccion5 from "../seccion/Seccion-5";
import Seccion6 from "../seccion/Seccion-6";
import Footer from "../seccion/Footer";
import Seccion1 from "../seccion/seccion-1";

function Paginaprincipal() {
    return (
        <div>
            <Nav />
            <Seccion1 />
            <Seccion2 />
            <Seccion3 />
            <Seccion4 />
            <Seccion5 />
            <Seccion6 />
            <Footer />
        </div>
    )
}
export default Paginaprincipal;