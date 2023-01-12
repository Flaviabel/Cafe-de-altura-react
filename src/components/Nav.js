import { Outlet, Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            {
                <div id="container">
                    <header>
                        <a href="">Home</a>
                        <main className="part1">
                            <div className="logotaza">
                                <a href="">cafedealtura.com</a>
                                <img src="images/taza de cafe.png" alt="taza de cafe" />
                            </div>
                            <nav>
                                <Link to="/tienda">Tienda</Link>
                                <a href="tienda.html">Tienda</a>
                                <a href="pages/suscripcion.html" target="_blank">Suscripción</a>
                                <a href="pages/paraempresas.html" target="_blank">Para empresas</a>
                                <a href="pages/sobre_nosotros.html" target="_blank">Sobre nosotros</a>
                                <a href="pages/contacto.html" target="_blank">Contacto</a>
                            </nav>

                            <div className="logophone">
                                <img src="/images/Phone.svg" alt="phone" />
                                <a href="tel:+34919490518">+34 919 49 05 18</a>
                                <input className="login" type="submit" value="Iniciar sesión" />
                            </div>
                            <div className="shoppingcart"> <a href="cesta.html"><img src="images/fin de nav.png" alt="" /></a>
                            </div>
                        </main>
                            <Outlet />
                        <div className="firstsection">
                            <article className="article">
                                <h3 className="cupplant">De la planta a tu taza</h3>
                                <h1 className="title">El mejor café del mundo, ahora en tu casa.</h1>
                                <p className="textbelowthetitle">Trabajamos con agricultores de todo el mundo para seleccionar los
                                    mejores granos de café y
                                    que
                                    puedas
                                    viajar desde la comodidad de tu hogar.</p>
                                <div>
                                    <button className="buttonorigins">Descubrir orígenes</button>
                                    <button className="buttonbuy"><a href="tienda.html">Comprar café</a></button>
                                </div>
                            </article>
                            <aside><img className="grains" src="images/Hero image.png" alt="cafe" /></aside>
                        </div>
                    </header>
                </div>
            }
        </div>
    )
}

export default Nav