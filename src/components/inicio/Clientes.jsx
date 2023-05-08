import ImgCliente from "../../imagenes/cliente.jpg"
import SeccionNav from "../../components/navegador/SeccionNav"

const Clientes = () => {
  return (
    <div>
      <SeccionNav />
      <section className="seccionClientes">
        <img src={ImgCliente} />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, necessitatibus ullam odio rem,
          culpa animi fugiat aperiam dolor, veniam amet quis? Dolorum blanditiis a placeat voluptatum aspernatur sequi dolores qui.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem laboriosam deleniti assumenda corporis aliquam error!
          Veniam accusamus facere vero tempore inventore! Facilis aspernatur saepe quaerat odio nostrum deserunt repellendus quis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident vel amet magnam fugiat voluptatum natus repudiandae
          doloribus vero eligendi. Sapiente obcaecati est ipsum! Nihil adipisci at totam praesentium facilis.</p>
      </section>

    </div>
  )
}

export default Clientes