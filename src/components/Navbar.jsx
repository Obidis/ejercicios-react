// Updated code for Navbar.js
import '../styles/layout/_navbar.scss';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navigation-menu'>
      <ol className='ol-links'>
        <li><Link to={"/CambiarColor"} className='links'>Cambiar Color de Fondo</Link></li>
        <li><Link to={"/ContadorClicks"} className='links'>Contador de Clicks</Link></li>
        <li><Link to={"/ListaDinamica"} className='links'>Lista Dinamica</Link></li>
        <li><Link to={"/FiltradoDinamico"} className='links'>Filtrado Dinamico</Link></li>
        <li><Link to={"/CalculadoraSencilla"} className='links'>Calculadora</Link></li>
        <li><Link to={"/Temporizadores"} className='links'>Temporizadores</Link></li>
        <li><Link to={"/GeneradorContraseñas"} className='links'>Generador de Contraseñas</Link></li>
        <li><Link to={"/ContadorPalabras"} className='links'>Contador de Palabras</Link></li>


      </ol>
    </div>

  )
}

export default Navbar

