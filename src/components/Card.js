import api from "../api";

function Card() {

    return (
        api.map(coffee => {
            return (
                <div className="bag" key={coffee.id}>
                    <div><img class="bagimg" src={coffee.img_url} alt="coffe bag" /></div>
                    <div class="h4">
                        <h4 class="nombre">{coffee.brand} </h4>
                    </div>
                    <div class="precio">
                        <h4>{coffee.price}</h4>
                    </div>
                    <div class="buttonnovedades">
                        <input className="addbutton" type="submit" value="Añadir" /></div>
                </div>
            )
        })
    )
}

export default Card; 