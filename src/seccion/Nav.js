import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Cesta } from "../Context/Cesta";

function Nav() {
    const {count} = useContext(Cesta);

    return (
        <div id="container">
            <header>
                <a href="http://localhost:3000/">Home</a>
                <main className="part1">
                    <div className="logotaza">
                        <a href="http://localhost:3000/">cafedealtura.com</a>
                        <img src="images/taza de cafe.png" alt="taza de cafe" />
                    </div>
                    <nav>
                        <Link to="/tienda" className="tienda-link">Tienda</Link>
                        <Link to="/suscripcion" className="tienda-link">Suscripcion</Link>
                        <Link to="/empresas" className="tienda-link">Para empresas</Link>
                        <Link to="/nosotros" className="tienda-link">Sobre nosotros</Link>
                        <Link to="/contacto" className="tienda-link">Contacto</Link>
                    </nav>

                    <div className="logophone">
                        <img src="/images/Phone.svg" alt="phone" />
                        <a href="tel:+34919490518">+34 919 49 05 18</a>
                        <input className="login" type="submit" value="Iniciar sesión" />
                    </div>
                    <div className="shoppingcart"><Link to="/tienda" className="tienda-link"><img src="images/fin de nav.png" alt="" />{count}</Link>
                    </div>
                </main>
            </header>
        </div>
    )
}

export default Nav