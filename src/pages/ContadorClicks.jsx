//About.js
import React from 'react'
import '../styles/layout/_contadorClicks.scss'
import BackHome from '../components/BackHome'
import Contador from '../components/Contador'
import Title from '../components/Title'


function ContadorClicks() {
  return (
    <div>
      <Title title="Contador de Clicks" />
      <BackHome />
      <Contador />


    </div>
  )
}

export default ContadorClicks
