import Footer from "../seccion/Footer";
import Form from "../Components/Form";
import Nav from "../seccion/Nav";
function Nosotros() {
    return (
        <div>
            <Nav />
            <div>
                <section className="part6">
                    <main class="containerpart6">
                        <div className="textsection">
                            <div className="contact">
                                <h1 id="titlecontact">Entra en contacto con nosotros</h1><br />
                                <p id="subtitlecontact"> Si tienes dudas, ponte en contacto con nosotros a través del formulario
                                    y te
                                    responderemos lo
                                    antes
                                    posible.</p>
                            </div>
                            <div className="info">
                                <p> Tambien puedes ponerte en contacto con nosotros en nuestra dirección o a través del teléfono
                                    de
                                    la
                                    tienda.</p>
                                <p> 742 Evergreen Terrace <br />
                                    Springfield, OR 12345</p>
                                <div class="phonenumber">
                                    <img id="imagenphone" src="images/Iconphonewhite.png" alt="phone" />
                                    <p>+1(555)123-4567</p>
                                </div>
                                <div className="emaildata">
                                    <img src="images/Iconemailwhite.png" alt="mail" />
                                    <p>support@example.com</p>
                                </div>
                                <p>¿Buscas un trabajo? <a href="A">Ver nuestras ofertas</a></p>
                            </div>
                        </div>
                        <Form />
                    </main >
                </section >
                <Footer />
            </div>
        </div >
    )
}

export default Nosotros;