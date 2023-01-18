import Footer from "../seccion/Footer";
import Nav from "../seccion/Nav";
import { Cesta } from "../Context/Cesta";
import { useContext } from "react";

function CestaCompra() {
    const { count, setCount } = useContext(Cesta);
    const { countUnidad} = useContext(Cesta);

    return (
        <div>
            <Nav />
            <div className="titlecesta">
                <h1>Cesta ({countUnidad})</h1>
            </div>
            <div className="cestacontain">
                <article className="cestaproducts">
                    <div>
                        <h2>Productos</h2>
                    </div>
                    <div className="cestaenvio">
                        <h2>Seleccionar envio</h2>
                        <div className="cestaenviofree">
                            <div className="enviofree">
                                <h3>Envio 5-7 dias</h3>
                                <p>Opcion estandar sin seguimiento</p>
                            </div>
                            <div className="cestaprecio">
                                <h2>GRATIS</h2>
                            </div>
                        </div>
                        <img src="/images/Divider.png"></img>
                        <div className="cestaenviofree">
                            <div>
                                <h3>Envio urgente 24hs</h3>
                                <p>Recibe tu pedido en las siguientes 24hs(Para pedidos realizados antes de las 13hs).</p>
                            </div>
                            <div className="cestaprecio">
                                <h2>9,00</h2>
                            </div>
                        </div>
                    </div>
                </article>
                <aside>
                    <h2>Total del carrito</h2>
                    <h3>SUBTOTAL</h3>
                    <h3>ENVIO</h3>
                    <h3><strong>TOTAL</strong></h3>
                    <p>Incluye 3,78 de IVA</p>
                    <button className="addbutton">Ir al checkout</button>
                    <button className="addbutton">Seguir comprando</button>
                </aside>
            </div>
            <Footer />

        </div>
    )
}

export default CestaCompra;