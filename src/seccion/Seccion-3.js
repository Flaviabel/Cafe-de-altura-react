import { useContext } from "react";
import { Cesta } from "../Context/Cesta";
import { Link } from "react-router-dom";

function Seccion3() {
    const { count, setCount } = useContext(Cesta);
    const { countUnidad, setCountUnidad } = useContext(Cesta);


    return (
        <div>
            <section class="part3">
                <div class="titlenovedades">
                    <h2 id="nov">Novedades</h2>
                </div>

                <main class="coffeebag">
                    <div class="bag">
                        <div><img class="bagimg" src="images/coffe.svg" alt="coffe bag" /></div>
                        <div class="h4">
                            <h4 class="nombre">Costa Rica Tarrazú </h4>
                        </div>
                        <div class="precio">
                            <h4>9,00 €</h4>
                        </div>
                        <div class="buttonnovedades"><input class="addbutton" onClick={() => setCount(count + 9) + setCountUnidad(countUnidad + 1)} type="submit"
                            value="Añadir" /></div>
                    </div>

                    <div class="bag">
                        <div><img class="bagimg" src="images/coffe%201.svg" alt="coffe bag" /></div>
                        <div class="h4">
                            <h4 class="nombre">Colombia Los Naranjos</h4>
                        </div>
                        <div class="precio">
                            <h4>9,00 €</h4>
                        </div>
                        <div class="buttonnovedades"><input class="addbutton" onClick={() => setCount(count + 9)  + setCountUnidad(countUnidad + 1)} type="submit"
                            value="Añadir" /></div>
                    </div>
                    <div class="bag">
                        <img class="bagimg" src="images/coffe%202.svg" alt="coffe bag" />
                        <div class="h4">
                            <h4 class="nombre">Cafe Madrid</h4>
                        </div>
                        <div class="precio">
                            <h4>9,00 €</h4>
                        </div>
                        <div class="buttonnovedades"><input class="addbutton" onClick={() => setCount(count + 9)  + setCountUnidad(countUnidad + 1)} type="submit"
                            value="Añadir" /></div>
                    </div>
                    <div class="bag">
                        <div><img class="bagimg" src="images/coffe 3.png" alt="coffe bag" /><br /></div>
                        <div class="h4">
                            <h4 class="nombre">Etiopia Yrgacheff </h4>
                        </div>
                        <div class="precio">
                            <h4>9,00 €</h4>
                        </div>
                        <div class="buttonnovedades"><input class="addbutton" onClick={() => setCount(count + 9)  + setCountUnidad(countUnidad + 1)} type="submit"
                            value="Añadir" /></div>
                    </div>
                </main>

                <div class="vertodos">
                <Link to="/tienda" className="tienda-link" id="enlacever">Ver todos</Link>
                    <img id="flecha" src="images/ver todos.png" alt="flecha" />
                </div>

            </section>
        </div>
    )
}

export default Seccion3;