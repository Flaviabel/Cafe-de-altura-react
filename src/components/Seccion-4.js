function Seccion4(){
    return (
        <div>
            {
                <section class="part4">
                    <article class="questioncontainer">
                        <h1 class="frequentquestions">Preguntas frecuentes</h1>
                        <div class="order">
                            <div class="boxopening">
                                <h1 class="preguntash1">¿Cómo hago el pedido?</h1>
                                <button class="openingicon" onclick="openClose()"><img id="iconoclick1" src="icono/Icon2.png"
                                    alt="" /></button>
                            </div>
                            <div id="funcionopenclose">
                                <img class="line" src="phone/Divider.png" alt="" />
                                <p class="innertext">
                                    Selecciona el café que deseas probar y completa el proceso de compra. Si lo prefieres, te
                                    preguntamos cada cuánto quieres que te lo mandemos a casa y asi nunca te quedaras sin café.
                                </p>
                                <p class="vacio"></p>
                            </div>
                        </div>
                        <div class="lowprices">
                            <div class="boxopening">
                                <h1 class="lowpricesquestion">¿Por qué los precios son tan bajos?</h1>
                                <button class="openingicon" onclick="closeOpen()"><img id="iconoclick2" src="icono/Icon2.png"
                                    alt="" /></button>
                            </div>
                            <div id="funcionopen">
                                <img class="line" src="phone/Divider.png" alt="" />
                                <p class="innertext">
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
                        <div class="sendtooffice">
                            <div class="boxopening">
                                <h1>¿Es posible enviar café a mi oficina?</h1>
                                <button class="openingicon" onclick="closeClose()"><img id="iconoclick3" src="icono/Icon.png"
                                    alt="" /></button>
                            </div>
                            <div id="funcionclose">
                                <img class="line" src="phone/Divider.png" alt="" />
                                <p class="innertext">
                                    Así obtenemos el mejor precio para ti y la persona que está detrás de los
                                    granos
                                    de cafe recibe el mayor beneficio posible.
                                </p>
                            </div>
                        </div>
                        <div id="linkquestions">
                            <div><a href="">Resolvemos tus dudas</a>
                                <img src="icono/Iconflecha.png" alt="" />
                            </div>
                        </div>
                    </article>

                </section>
            }
        </div>
    )
}

export default Seccion4;