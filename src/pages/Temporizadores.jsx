import BackHome from '../components/BackHome'
import Temporizador from '../components/Temporizador'
import '../styles/layout/_temporizadores.scss'
import Title from '../components/Title'

const Temporizadores = () => {
    return (
        <div>
            <Title title="Temporizador" />
            <BackHome />
            <Temporizador />
        </div>
    );
};
export default Temporizadores;
