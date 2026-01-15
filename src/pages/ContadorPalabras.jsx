import BackHome from '../components/BackHome'
import Title from '../components/Title'
import CuentaPalabras from '../components/CuentaPalabras'
import '../styles/layout/_cuentaPalabras.scss'

function ContadorPalabras() {
    return (
        <div>
            <Title title="Contador de Palabras" />
            <BackHome />
            <CuentaPalabras />
        </div>
    )
}

export default ContadorPalabras