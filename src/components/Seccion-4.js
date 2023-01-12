function Seccion4() {
    return (
        <div>
            {
                <section className="part4">
                    <article className="questioncontainer">
                        <h1 className="frequentquestions">Preguntas frecuentes</h1>
                        <div className="order">
                            <div className="boxopening">
                                <h1 className="preguntash1">¿Cómo hago el pedido?</h1>
                                <button className="openingicon" onclick="openClose()">
                                    <img id="iconoclick1" src="images/Icon2.png" alt="icon" />
                                    </button>
                            </div>
                            <div id="funcionopenclose">
                                <img className="line" src="images/Divider.png" alt="line" />
                                <p className="innertext">
                                    Selecciona el café que deseas probar y completa el proceso de compra. Si lo prefieres, te
                                    preguntamos cada cuánto quieres que te lo mandemos a casa y asi nunca te quedaras sin café.
                                </p>
                                <p className="vacio"></p>
                            </div>
                        </div>
                        <div className="lowprices">
                            <div className="boxopening">
                                <h1 className="lowpricesquestion">¿Por qué los precios son tan bajos?</h1>
                                <button className="openingicon" onclick="closeOpen()"><img id="iconoclick2" src="images/Icon2.png"
                                    alt="" /></button>
                            </div>
                            <div id="funcionopen">
                                <img className="line" src="images/Divider.png" alt="" />
                                <p className="innertext">
                                    Viajamos constantemente para encontrar los mejores granos y a los agricultores más
                                    exigentes. Si
                                    podemos ofrecerte estos precios es porque tratamos directamente con los productores de café,
                                    sin
                                    intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los
                                    granos
                                    de cafe recibe el mayor beneficio posible.
                                </p>
                            </div>
                        </div>
                        <div className="sendtooffice">
                            <div className="boxopening">
                                <h1>¿Es posible enviar café a mi oficina?</h1>
                                <button className="openingicon" onclick="closeClose()"><img id="iconoclick3" src="images/Icon.png"
                                    alt="" /></button>
                            </div>
                            <div id="funcionclose">
                                <img className="line" src="images/Divider.png" alt="" />
                                <p className="innertext">
                                    Así obtenemos el mejor precio para ti y la persona que está detrás de los
                                    granos
                                    de cafe recibe el mayor beneficio posible.
                                </p>
                            </div>
                        </div>
                        <div id="linkquestions">
                            <div><a href="">Resolvemos tus dudas</a>
                                <img src="images/Iconflecha.png" alt="" />
                            </div>
                        </div>
                    </article>

                </section>
            }
        </div>
    )
}

export default Seccion4;