import { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'


//Funcion Contraseñas   
const Contraseñas = () => {
    //Variables
    let contrasena = "";
    const [longitud, setLongitud] = useState("");
    const [resultado, setResultado] = useState("");
    const caracteres = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}|;:,.<>?";

    //Generar Contraseña
    const generarContrasena = () => {
        if (longitud < 4) {
            alert("Por favor, introduce un número mayor o igual a 4 para generar una contraseña.");
            return;
        }

        for (let i = 0; i < longitud; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            contrasena += caracteres.charAt(indiceAleatorio);
        }
        setResultado(contrasena);
    }

    //Reset
    const clear = () => {
        setLongitud("");
        setResultado("");
    }

    //Copiar
    const copy = () => {
        navigator.clipboard.writeText(resultado);
    }

    //Render
    return (
        <div className='contraseñas'>
            <p className='contraseñas-text'>Introduce la longitud de la contraseña mayor de 4 caracteres</p>
            <input id='contraseñas-input' type="number" value={longitud} onChange={(e) => setLongitud(parseInt(e.target.value))} />

            <div className='resultado'>
                <p className='resultado-text'>{resultado}</p>
            </div>
            <PrimaryButton className='btn4' text="Generar Contraseña" onMyClick={() => generarContrasena()} />
            <PrimaryButton className='btn4' text="Reset" onMyClick={() => clear()} />
            <PrimaryButton className='btn4' text="Copiar" onMyClick={() => copy()} />
        </div>
    )
}


export default Contraseñas
