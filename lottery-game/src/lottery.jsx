import { useState } from "react"
import "./lottery.css"
import { genTicket , sum } from "./helper.js"

function Lottery() {
  let [ticket, setTicket] = useState(genTicket(3))

  let buyTicket =()=> {
    setTicket(genTicket(3))
  }
let isWinning = sum(ticket)===15
  return (
    <div>
      <h1>Lottery</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <h3>{isWinning && "congratulation you have won the ticket"}</h3>
      <button onClick={ buyTicket}> Buy new ticket</button>
    </div>
  )
}

export default Lottery
