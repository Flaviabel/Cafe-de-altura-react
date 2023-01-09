function Nav() {
    return (
        <div>
            {
                <div id="container">
                    {/* <!-- parte1 nav, imagen y texto --> */}
                    <header>
                        <a href="">Home</a>
                        <main class="part1">
                            <div class="logotaza">
                                <a href="">cafedealtura.com</a>
                                <img src="assets/taza de cafe.png" alt="taza de cafe" />
                            </div>
                            <nav>
                                <a href="tienda.html">Tienda</a>
                                <a href="pages/suscripcion.html" target="_blank">Suscripción</a>
                                <a href="pages/paraempresas.html" target="_blank">Para empresas</a>
                                <a href="pages/sobre_nosotros.html" target="_blank">Sobre nosotros</a>
                                <a href="pages/contacto.html" target="_blank">Contacto</a>
                            </nav>
                            <div class="logophone">
                                <img src="assets/Phone.svg" alt="phone" />
                                <a href="tel:+34919490518">+34 919 49 05 18</a>
                                <input class="login" type="submit" value="Iniciar sesión" />
                            </div>
                            <div class="shoppingcart"> <a href="cesta.html"><img src="assets/fin de nav.png" alt="" /></a>
                            </div>
                        </main>
                        <div class="firstsection">
                            <article class="article">
                                <h3 class="cupplant">De la planta a tu taza</h3>
                                <h1 class="title">El mejor café del mundo, ahora en tu casa.</h1>
                                <p class="textbelowthetitle">Trabajamos con agricultores de todo el mundo para seleccionar los
                                    mejores granos de café y
                                    que
                                    puedas
                                    viajar desde la comodidad de tu hogar.</p>
                                <div>
                                    <button class="buttonorigins">Descubrir orígenes</button>
                                    <button class="buttonbuy"><a href="tienda.html">Comprar café</a></button>
                                </div>
                            </article>
                            <aside><img class="grains" src="assets/img2.jfif" alt="cafe" /></aside>
                        </div>
                    </header>
                </div>
            }
        </div>
    )
}

export default Nav