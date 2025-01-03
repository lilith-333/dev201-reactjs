import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useState } from 'react'
import * as types from './store/actionsTypes'

function AppH(props) {

  const [step,setStep] = useState(5)

  const dispatch = useDispatch()
  const num = useSelector(state => state.num)

  return (
    <>
      <p>Compteur : {num} </p>
     <button onClick={() => dispatch({type:types.INCREMENTER})}>Incrementer</button>
     <button onClick={() => dispatch({type:types.DECREMENTER})}>Decrementer</button>
     <button onClick={() => dispatch({type:types.RESET})}>Reset</button>
     <div>
      <button onClick={() => dispatch({type:types.INCREMENTERBY, payload : step*1})}>Incrementer By</button>
      <button onClick={() => dispatch({type:types.DECREMENTERBY, payload : step*1})}>Decrementer By</button>
      <input type="text" value={step} onChange={e=>setStep(e.target.value)}/>
     </div>
    </>
  )
}


export default AppH
