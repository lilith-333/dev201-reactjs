
import React, { useState } from 'react'

export default function MessageFun() {
  const [msg,setMessage] = useState("Bienvenue Visiteur2");
  const [msgBtn,setMsgBtn] = useState("inscription2")

  function inscription() {
    setMessage("Votre inscription est effectuée");
    setMsgBtn("Merci")
  }

  return (
    <div>
      <div>
        <h2>{msg}</h2>
        <button onClick={inscription}>{msgBtn}</button>
      </div>
    </div>
  )
}

