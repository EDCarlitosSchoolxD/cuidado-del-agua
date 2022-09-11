import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navegacion } from '../components/nav/Navegacion';
import { Previous } from '../components/Previous/Previous';
import { Next } from '../components/Next/Next';
import { CardModal } from '../components/CardModal/CardModal';
import fugasDeAgua from '../img/fugasDeAgua.jpg'
import cerrarGrifos from '../img/cerrarGrifos.jpg'
import aguaReciclada from '../img/aguaReciclada.jpg'
import lavadoraCompleta from '../img/lavadoraCompleta.jpg'
import ecoFirendly from '../img/ecoFriendly.jpg'
import actDes from '../img/actdespifaladora.jpg'
import energiaRes from '../img/energiaResponsable.jpg'
import consumoRes from '../img/consumoRes.jpg'



const datos = [
    {img:fugasDeAgua,titulo:"Atender las fugas de agua en el sanitario.",contenido:" Una pérdida de agua de esta naturaleza significa el sacrificio en vano de 100 a 1.000 litros de agua diariamente."},
    {img:cerrarGrifos ,titulo:"Cerrar los grifos que no se utilizan.",contenido:"Al bañarnos, lavarnos las manos, cepillarnos los dientes u otras actividades cotidianas, podemos cerrar el grifo y volverlo a abrir, en lugar de dejar el agua correr sin darle uso."},
    {img:aguaReciclada,titulo:"Emplear agua reciclada para regar las plantas.",contenido:"En la medida de lo posible, no destine aguas limpias para el mantenimiento de las plantas, especialmente si se trata de céspedes o largas extensiones vegetales."},
    {img:lavadoraCompleta,titulo:"Utilizar la lavadora con cargas completas.",contenido:"Aprovechemos al máximo la enorme cantidad de agua que estas máquinas emplean para lavar la ropa, al igual que los lavavajillas y otros aparatos semejantes."},
    {img:ecoFirendly,titulo:"Consumir productos eco-friendly.",contenido:"Especialmente aquellos productos que terminen vertidos en el alcantarillado o en otras fuentes de agua, ya que así no añadimos contaminantes adicionales a las aguas servidas. Debemos evitar también verter aceites usados por el drenaje."},
    {img:actDes,titulo:"Evitar actividades despilfarradoras.",contenido:"Como el riego de carreteras de tierra, el lavado de aceras con manguera, especialmente durante el día. Acudir lo menos posible a los autolavados."},
    {img:energiaRes,titulo:"Emplear la energía eléctrica de manera responsable.",contenido:"aunque no lo parezca, el despilfarro de electricidad también conduce al despilfarro de agua, ya que en su casi totalidad la energía se obtiene de fuentes vinculadas al agua."},
    {img:consumoRes,titulo:"Educar en el consumo responsable.",contenido:"Enseñemos a nuestros hijos, amigos, vecinos y conocidos a respetar y conservar el agua. Exijamos a nuestros gobiernos locales y nacionales campañas para la concientización y el ahorro de agua, así como la instalación de plantas de tratamiento de aguas servidas y la vigilancia del uso que dan al agua las grandes empresas e industrias."},
]


export const Recomendaciones = () => {
  return (
    <>
        <Navegacion />

        <h2 className='recomendaciones--titulo'>Recomendaciones para cuidar el agua</h2>

        <div className='cards--container'>
            {
                datos.map(dato => (
                    <CardModal key={dato.titulo} img={dato.img} texto={dato.contenido} titulo={dato.titulo} />
                ))
            }
        </div>





        <div className='next-previous container'>
            <Previous route="/importancia" />
            <Next route="/form" />
        </div>

        <Footer />
    
    </>
    )
}
