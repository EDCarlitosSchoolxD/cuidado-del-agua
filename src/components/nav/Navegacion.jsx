import {GiWaterDrop} from 'react-icons/gi';
import { Enlace } from '../Enlace/Enlace';
 

export const Navegacion = () => {
    
    

  return (
    <div className='nav--container'>

        <nav className={`container`}>

            <ul className='navegacion'>
                <Enlace route="/" texto={<GiWaterDrop/>} />
                <Enlace route="/importancia" texto="Importancia del agua" />
                <Enlace route="/recomendaciones" texto="Recomendaciones para cuidar el agua" />
                <Enlace route="/form" texto="Formulario" />
            </ul>

            
        </nav>
    </div>
    
)
}
