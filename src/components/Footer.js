function Footer() {
    return (
        <div>
            {
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
            }
        </div >
    )
}

export default Footer;