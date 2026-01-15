import { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'


const Filtrado = () => {

    const [vehiculos, setVehiculos] = useState(["Ferrari",
        "Porsche",
        "Lamborgini",
        "Aston Martin",
        "Maserati",
        "Mclaren",
        "Rolls-Royce",
        "Bentley",
        "Lotus",
        "Bugatti",
        "Pagani",
        "Koenigsegg"])

    const [filteredCarsList, setFilteredCarsList] = useState(vehiculos)
    const filterCars = (value) => {
        setVehiculos(value)
        const filteredCars = vehiculos.filter((car) => car.toLowerCase().startsWith(value.toLowerCase()))
        setFilteredCarsList(filteredCars)
    }

    const reloadPage = () => {
        window.location.reload()
    }

    return (

        <div className="filtro">

            <div className="area">

                <input className='filter-input' type="search" name='busqueda' placeholder='Buscar' autocomplete="off" onChange={(e) => filterCars(e.target.value)} />

                <ul className="lista">
                    {
                        filteredCarsList.map((car, index) => {
                            return (
                                <li className="li-elements" key={index}>{car}</li>
                            )
                        })
                    }
                </ul>
                <PrimaryButton className="btn4" text="Nueva Busqueda" onMyClick={reloadPage} />
            </div>
        </div>

    )
}



export default Filtrado