function Seccion1() {
    return (
        <div>
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
        </div>
    )
}
export default Seccion1;