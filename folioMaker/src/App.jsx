import React from 'react'
import Header from './components/Header'
import DragableSection from './components/DragableSection'
import MainSection from './components/MainSection'
import './App.css';

const App = () => {
  return (<>
    <Header/>
    <main className='main'>
      <DragableSection/>
      <MainSection/>
    </main>
  </>
  )
}

export default App