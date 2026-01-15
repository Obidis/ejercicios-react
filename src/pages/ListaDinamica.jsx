import React from 'react'
import BackHome from '../components/BackHome'
import TodoList from '../components/TodoList'
import '../styles/layout/_listaDinamica.scss'
import Title from '../components/Title'


function ListaDinamica() {
   return (
      <div className='switcher'>
         <Title title="Lista Dinamica" />
         <BackHome />
         <TodoList />
      </div>
   )
}

export default ListaDinamica 