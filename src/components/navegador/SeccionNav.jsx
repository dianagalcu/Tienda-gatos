import Logo from "./Logo"
import Navegador from "./Navegador"
import "./navegador.css"


const SeccionNav = () => {
    return (
        <div>
            <section className="seccionNav">
                <Logo/>
                <Navegador/>
            </section>

        </div>
        

    )
}

export default SeccionNav