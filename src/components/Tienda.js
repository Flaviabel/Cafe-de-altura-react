import Footer from "./Footer";
import Seccion2 from "./seccion-2";
import { Link } from "react-router-dom";
function Tienda() {
    return (
        <div>
            {
                <body>
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
                            <img src="images/Phone.svg" alt="phone" />
                            <a href="tel:+34919490518">+34 919 49 05 18</a>
                            <input className="login" type="submit" value="Iniciar sesión" />
                        </div>
                        <div className="shoppingcart"> <a href="cesta.html"><img src="images/fin de nav.png" alt="" /></a>
                        </div>
                    </main>
                    <div className="pagcesta"><h1 >Tienda</h1></div>
                    <div className="articleaside" >
                        <article className="articleproducts">
                            <h1>Productos</h1>
                        </article>
                    </div>

                    <div>
                        <div>
                            <main className="items" ></main>
                            {/* className="bagproducts" */}
                        </div>
                    </div>
                    <section className="productsBagsList">
                        <div class="coffeebag">
                            <div class="bag">
                                <img className="bagimg" src='images/coffe.svg' />
                                <h1 class="nombre">Title</h1>
                                <p>Price $$$</p>
                                <button class="addbutton">Añadir</button>
                            </div>
                        </div>
                        <div class="coffeebag">
                            <div class="bag">
                                <img className="bagimg" src='images/coffe%201.svg' />
                                <h1 class="nombre">Title</h1>
                                <p>Price $$$</p>
                                <button class="addbutton">Añadir</button>
                            </div>
                        </div>
                        <div class="coffeebag">
                            <div class="bag">
                                <img className="bagimg" src='images/coffe%202.svg' />
                                <h1 class="nombre">Title</h1>
                                <p>Price $$$</p>
                                <button class="addbutton">Añadir</button>
                            </div>
                        </div>
                    </section>
                    <aside>
                        <p className="carrito">Total: <span className="total"></span></p>
                        <button className="boton-vaciar" >Vaciar</button>
                        {/* className="carrito" */}
                    </aside>
                    <Seccion2 />
                    <Footer />
                </body>
            }
        </div >
    )
}

export default Tienda;