
import React from 'react'
import BackHome from '../components/BackHome'
import SwichColor from '../components/SwichColor'
import Title from '../components/Title'

function CambiarColor() {
  return (
    <div className='switcher'>
      <Title title="Cambiar Color de Fondo" />
      <BackHome />
      <SwichColor />
    </div>
  )
}

export default CambiarColor
