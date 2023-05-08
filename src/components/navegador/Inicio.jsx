import SeccionMenu from "../menu/SeccionMenu"
import Logo from "./Logo"
import Navegador from "./Navegador"
import "./navegador.css"
import Noticias from "../noticias/Noticias"


const Inicio = () => {
    return (
        <div>
            <section className="seccionNav">
                <Logo/>
                <Navegador/>
                
            </section>
            <section className="contenido">
                <SeccionMenu/>
                <Noticias/>
            </section>

        </div>
        

    )
}

export default Inicio