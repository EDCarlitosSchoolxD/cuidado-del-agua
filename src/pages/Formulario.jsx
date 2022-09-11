import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { InputRadio } from '../components/InputRadio/InputRadio'
import { Navegacion } from '../components/nav/Navegacion'
import { Previous } from '../components/Previous/Previous'

export const Formulario = () => {

  function formularioSubmit(e){
      e.preventDefault();

      const formulario = document.forms['formulario'];
      console.log(formulario['whatYourName'].value);
      console.log();

      const nombre = formulario['whatYourName'].value;
      const pregunta2 = formulario['youCareWater'].value
      const pregunta3 = formulario['cea'].value
      const pregunta4 = formulario['ceat'].value
      const pregunta5 = formulario['eaip'].value
      const pregunta6 = formulario['muchoTexto'].value
      const pregunta7 = formulario['recomendacion'].value


      const resultado = [pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7].map(v => v===''?0:parseInt(v));

      const aprobo =  (resultado.reduce((a,b) => a+b) / 6).toFixed(2);

      
      if(aprobo >= 9){
        alert(`Felicidades ${nombre} tu calificacion es de ${aprobo}`)
      }else{
        alert(`Eres malisimo ${nombre} tu calificacion es de ${aprobo}`)

      }


    
    }

  return (
    <div>
        <Navegacion />

            <form onSubmit={formularioSubmit}  className='container' id='formulario' method='POST'>

              <div className="formInput-container">
                <label className="form-labelInicial" htmlFor="whatYourName">1.- ¿Cual es tu nombre?</label>
                <input placeholder='Tu Nombre' className='form-inputText' type="text" name="whatYourName" id="whatYourName" />

              </div>

              <div className="formInput-container">
                <label className="form-labelInicial"  htmlFor="agua">2.-¿Cuidas el agua?</label>
                <InputRadio id="1" label="si" value="10" name="youCareWater" />
                <InputRadio id="2" label="No" value="5" name="youCareWater" />
                <InputRadio id="3" label="No me interesa" value="0" name="youCareWater" />
              </div>

              <div className="formInput-container">
                <label className="form-labelInicial" htmlFor="agua">3.-¿Cual es el porcentaje de agua en el cuerpo?</label>
                <InputRadio id="1" name="cea" value="0" label="50%." />
                <InputRadio id="2" name="cea" value="0" label="30%." />
                <InputRadio id="3" name="cea" value="0" label="80%." />
                <InputRadio id="4" name="cea" value="10" label="70%." />
                
              </div>

              <div className="formInput-container">
                <label className="form-labelInicial" htmlFor="ceat">4.-¿Cual es el porcentaje de agua en el planeta?</label>
                <InputRadio id="1"  name="ceat" value="0" label="50%." />
                <InputRadio id="2" name="ceat" value="0" label="30%." />
                <InputRadio id="3" name="ceat" value="0" label="80%." />
                <InputRadio id="4" name="ceat" value="10" label="70%." />   
              </div>

              <div className="formInput-container">
                  <label className="form-labelInicial" htmlFor="eaip">5.-El agua es indispensable para...</label>
                  <InputRadio id="1" name="eaip" value="6" label="Sostener el clima del planeta." />
                  <InputRadio id="2" name="eaip" value="6" label="Procesos vitales de los organismos." />
                  <InputRadio id="3" name="eaip" value="10" label="Todas son correctas." />
                  <InputRadio id="4" name="eaip" value="6" label="Redistribuir determinados elementos químicos a lo largo del planeta." />
              </div>

              <div className="formInput-container">
                <label className="form-labelInicial" htmlFor="muchoTexto">6.-El agua es el elemento más importante para la vida. Es de una importancia vital para el ser humano, así como para el resto de animales y seres vivos que nos acompañan en el planeta Tierra.</label>
                <InputRadio id="1" name="muchoTexto" value="10" label="Verdadero." />
                <InputRadio id="2" name="muchoTexto" value="0" label="Falso." />
              </div>

              <div className="formInput-container">
                <label className="form-labelInicial" htmlFor="recomendacion">7.-Es una recomendacion para cuidar el agua</label>
                <InputRadio id="1" name="recomendacion" value="10" label="Eliminar a los jugadores de Lol." />
                <InputRadio id="2" name="recomendacion" value="0" label="Desperdiciar agua." />
                <InputRadio id="3" name="recomendacion" value="0" label="No cerrar los grifos que no se utilizan." />
                <InputRadio id="4" name="recomendacion" value="10" label="Atender las fugas de agua." />
              </div>


            


              <input className='btn-submit' type="submit" />
            </form>



            <div className='next-previous container'>
                <Previous route="/recomendaciones" />
            </div>


        <Footer />

    </div>
  )
}
