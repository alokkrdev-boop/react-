import { useState } from 'react'
import './App.css'
import Lottery from './lottery'
import TicketNum from './ticketNum'

function App() {
  return (
    <>
      <TicketNum num={5}/>
      <TicketNum num={5}/>
      <TicketNum num={5}/>
    </>
  )
}

export default App
