import Footer from "../seccion/Footer";
import Seccion2 from "../seccion/seccion-2";
import Coffes from '../api.json';
import Nav from '../seccion/Nav';
import { useContext } from "react";
import { Cesta } from "../Context/Cesta";


function Tienda() {
    const { count, setCount } = useContext(Cesta);
    const { deleteCount, setDeleteCount } = useContext(Cesta);
    return (
        <body>
            <Nav />
            <div className="pagcesta"><h1 >Tienda</h1></div>
            <div className="articleaside" >
                <article className="articleproducts">
                    <h1>Productos</h1>
                </article>
            </div>
            <div>
                <div>
                    <main className="items" ></main>
                </div>
            </div>
            <div className="productsBagsList">
                {
                    Coffes.map(coffee => {
                        return (
                            <div className="bag" key={coffee.id}>
                                <div>
                                    <img class="bagimg" src={coffee.img_url} alt="coffe bag" />
                                </div>
                                <div class="h4">
                                    <h4 class="nombre">{coffee.brand} </h4>
                                </div>
                                <div class="precio">
                                    <h4>{coffee.price}</h4>
                                </div>
                                <div class="buttonnovedades">
                                    <button className="addbutton" type="submit" value="Añadir" onClick={() => setCount(count + 1)}>Añadir</button>
                                    <button className="addbutton" type="submit" value="Añadir" onClick={() => setCount(count - 1)}>Eliminar</button>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <aside className="tiendatotal">
                <p>Total: {count}</p>
                <button className="addbutton" onClick={() => setCount(0)} >Vaciar</button>
            </aside><br/><br/>
            <Seccion2 />
            <Footer />
        </body>
    )
}

export default Tienda;