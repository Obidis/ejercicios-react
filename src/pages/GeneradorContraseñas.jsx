import BackHome from '../components/BackHome'
import Contraseñas from '../components/Contraseñas'
import Title from '../components/Title'
import '../styles/layout/_contraseñas.scss'
const GeneradorContraseñas = () => {
    return (
        <div>
            <Title title="Generador de Contraseñas" />
            <BackHome />
            <Contraseñas />
        </div>
    )
}

export default GeneradorContraseñas