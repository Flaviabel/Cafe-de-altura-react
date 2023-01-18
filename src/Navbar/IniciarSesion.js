import Footer from "../seccion/Footer";
import Nav from "../seccion/Nav";

function IniciarSesion() {
    return (
        <div>
            <Nav />
            <form className="formulariosesion">
                <h1 className="titlesesion">Login</h1><br></br>
                <label className="usersesion">Usuario</label>
                <input className="inputsesion"
                    type="text"
                    name="director"
                    // value={mail}
                />

                <label className="usersesion">Password</label>
                <input className="inputsesion"
                    type="password"
                    name="hasOscars"
                    // checked={hasOscars}
                />

                <button  className="buttonsesion" type="submit">Iniciar sesion</button>
                <p>Aun no te haz registrado? <a href="/">Hazlo aqui</a></p>
            </form>
            <Footer />
        </div>
    )
}
export default IniciarSesion;