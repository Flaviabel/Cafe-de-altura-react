
function Tienda() {
    return (
        <div>
            {
                <body>
                    <main className="part1">
                        <div className="logotaza">
                            <a href="index.html">cafedealtura.com</a>
                            <img src="assets/taza de cafe.png" alt="taza de cafe" />
                        </div>
                        <nav>
                            <a href="Tienda.js">Tienda</a>
                            <a href="pages/suscripcion.html" target="_blank">Suscripción</a>
                            <a href="pages/paraempresas.html" target="_blank">Para empresas</a>
                            <a href="pages/sobre_nosotros.html" target="_blank">Sobre nosotros</a>
                            <a href="pages/contacto.html" target="_blank">Contacto</a>
                        </nav>
                        <div className="logophone">
                            <img src="assets/Phone.svg" alt="phone" />
                            <a href="tel:+34919490518">+34 919 49 05 18</a>
                            <input className="login" type="submit" value="Iniciar sesión" />
                        </div>
                        <div className="shoppingcart"> <a href="cesta.html"><img src="assets/fin de nav.png" alt="" /></a>
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
                            <aside>
                                <h2 className="carrito">Carrito</h2>
                                <ul className="carrito"></ul>

                                <p className="carrito">Total: <span className="total"></span></p>
                                <button className="boton-vaciar" >Vaciar</button>
                                {/* className="carrito" */}
                            </aside>
                        </div>
                    </div>

                    <footer>
                        <section className="parte7">
                            <div id="logocafedealtura">
                                <a href="">cafedealtura.com</a>
                                <img src="assets/taza de cafe.png" alt="taza de cafe" />
                            </div>

                            <main id="teayudamos">
                                <div className="ayudamos">
                                    <div>
                                        <p>Te ayudamos en</p>
                                    </div>
                                    <div className="botonesdecontacto">
                                        <div>
                                            <button className="button"><img src="assets/Phone.svg" alt="phone" />+34 919 49 0518</button>
                                        </div>
                                        <div>
                                            <button className="button"><img id="botonmail" src="assets/Iconfooter.png"
                                                alt="" />hola@cafedealtura.com</button>
                                        </div>
                                    </div>
                                </div>

                                <section className="linkfoo">

                                    <div className="linksfooter">
                                        <a href="">Tienda</a>
                                        <a href="">Suscripcion</a>
                                        <a href="">Para empresas</a>
                                        <a href="">Sobre nosotros</a>
                                        <a href="">Contacto</a>
                                    </div>
                                    <div className="linksfooter2">
                                        <a href="">Politica de privacidad</a>
                                        <a href="">Politica de cookies</a>
                                        <a href="">Terminos y condiciones</a>
                                    </div>
                                </section>
                            </main>
                        </section>

                        <section id="parte8">
                            <p>Todos los derechos reservados- Cafe de altura SL-2022</p>
                        </section>
                    </footer>
                </body>
            }
        </div>
    )
}

export default Tienda;