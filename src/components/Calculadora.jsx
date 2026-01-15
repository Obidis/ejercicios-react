import { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'

//Calculadora
const Calculadora = () => {
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [resultado, setResultado] = useState(0)

    //Funciones
    const sumar = () => {
        setResultado(numero1 + numero2)
    }

    const restar = () => {
        setResultado(numero1 - numero2)
    }

    const multiplicar = () => {
        setResultado(numero1 * numero2)
    }

    const dividir = () => {
        setResultado(numero1 / numero2)
    }

    const clear = () => {
        setNumero1(0)
        setNumero2(0)
        setResultado(0)
    }

    return (
        <div className='calculadora'>
            <div className='calculadora-inputs'>
                <input className='input' type="number" value={numero1} onChange={(e) => setNumero1(parseInt(e.target.value))} />
                <input className='input' type="number" value={numero2} onChange={(e) => setNumero2(parseInt(e.target.value))} />
            </div>

            <div>
                <input className='resultado' type="text" id="resultado" value={resultado} placeholder="Resultado" />
            </div>
            <div className='buttons'>
                <div>
                    <PrimaryButton className='btn3' text="Sumar" onMyClick={sumar}></PrimaryButton>
                    <PrimaryButton className='btn3' text="Restar" onMyClick={restar}></PrimaryButton>
                </div>
                <div>
                    <PrimaryButton className='btn3' text="Multiplicar" onMyClick={multiplicar}></PrimaryButton>
                    <PrimaryButton className='btn3' text="Dividir" onMyClick={dividir}></PrimaryButton>
                </div>
            </div>
            <div>
                <PrimaryButton className='btn' text="Reset" onMyClick={clear}></PrimaryButton>
            </div>
        </div>
    )
}

export default Calculadora