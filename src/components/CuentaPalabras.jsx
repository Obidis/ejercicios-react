import { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'

//Función para contar letras
const CuentaPalabras = () => {

    //Estado para el texto
    const [texto, setTexto] = useState('');

    //Estado para el número de palabras

    const [palabras, setPalabras] = useState(0);

    //Estado para el número de letras

    const [letras, setLetras] = useState(0);

    //Función para contar letras
    const contarLetras = () => {
        let soloLetras = texto.replace(/\s/g, '');
        setLetras(soloLetras.length);
    };

    //Función para contar palabras
    const contarPalabras = () => {
        const palabras = texto.split(' ').filter(palabra => palabra.trim() !== '');
        setPalabras(palabras.length);
    };

    //Función para manejar el texto
    const handleTexto = (e) => {
        setTexto(e.target.value);
    };

    //Función para unificar onChange
    const handleContarPalabras = (e) => {
        handleTexto(e);
        contarPalabras();
        contarLetras();
    };

    //Función para manejar el reset
    const handleReset = () => {
        setTexto('');
        setPalabras(0);
        setLetras(0);
    };

    return (
        <div className='cuentaPalabras'>

            <textarea className='textarea'
                value={texto}
                onChange={handleContarPalabras}
                rows={4}
                cols={50}
                placeholder="Escribe aquí..."
            />

            <p className='texto'>Palabras: {palabras}: Letras {letras}</p>
            <PrimaryButton text="Reset" onMyClick={handleReset}></PrimaryButton>
        </div>
    );
};

export default CuentaPalabras;
