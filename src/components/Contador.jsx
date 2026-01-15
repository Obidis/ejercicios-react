import { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'

const Contador = () => {
    const [count, setCount] = useState(0)
    const resetCount = () => setCount(0)
    const incrementCount = () => setCount(count + 1)
    const decrementCount = () => setCount(count - 1)
    return (
        <div className='counter'>
            <h2> {count}</h2>
            <div>
                <PrimaryButton className='btn4' text="Incrementar" onMyClick={incrementCount}></PrimaryButton>
                <PrimaryButton className='btn4' text="Decrementar" onMyClick={decrementCount}></PrimaryButton>
                <PrimaryButton className='btn4' text="Reset" onMyClick={resetCount}></PrimaryButton>
            </div>

        </div>
    )

}

export default Contador