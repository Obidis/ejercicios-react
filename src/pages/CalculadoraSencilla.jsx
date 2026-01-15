import BackHome from '../components/BackHome'
import Calculadora from '../components/Calculadora'
import Title from '../components/Title'


function CalculadoraSencilla() {
    return (
        <div className='switcher'>
            <Title title="Calculadora Sencilla" />
            <BackHome />
            <Calculadora />
        </div>
    )
}

export default CalculadoraSencilla
