import { useState } from 'react';
import PrimaryButton from './PrimaryButton';

const Temporizador = () => {
    const [tiempo, setTiempo] = useState(0);
    const [intervalo, setIntervalo] = useState(null);
    const [iniciado, setIniciado] = useState(false);




    const iniciar = () => {
        if (!iniciado) {
            setIntervalo(setInterval(() => {
                setTiempo((prev) => prev + 1);
            }, 10));
            setIniciado(true);
        }
    };
    const pausar = () => {
        if (iniciado) {
            clearInterval(intervalo);

        }
    };
    const reiniciar = () => {
        clearInterval(intervalo);
        setTiempo(0);
        setIniciado(false);
    };

    return (
        <div className="temporizador-container">

            <div className="temporizador">
                <div className='temporizador__tiempo'>{tiempo}</div>
                <div className='temporizador__botones'>
                    <PrimaryButton className='btn4' text="Iniciar" onMyClick={iniciar}></PrimaryButton>
                    <PrimaryButton className='btn4' text="Pausar" onMyClick={pausar}></PrimaryButton>
                    <PrimaryButton className='btn4' text="Reiniciar" onMyClick={reiniciar}></PrimaryButton>
                </div>

            </div>
        </div>
    );
};
export default Temporizador;