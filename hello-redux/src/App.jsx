import { connect } from 'react-redux'
import './App.css'
import { useState } from 'react'

function App(props) {

  const [step,setStep] = useState(5)

  return (
    <>
      <p>Compteur : {props.num} </p>
     <button onClick={props.inc}>Incrementer</button>
     <button onClick={props.dec}>Decrementer</button>
     <button onClick={props.reset}>Reset</button>
     <div>
      <button onClick={()=>props.incBy(step)}>Incrementer By</button>
      <button onClick={() => props.decBy(step)}>Decrementer By</button>
      <input type="text" value={step} onChange={e=>setStep(e.target.value)}/>
     </div>
    </>
  )
}

function mapStateToProps(state) {
  return {
    num : state.num,
  }
}

function mapDispatchToProps(dispatch){
  return {
    inc: () => dispatch({type : "incrementer"}),
    dec: () => dispatch({type:"decrementer"}),
    reset: () => dispatch({type:"reset"}),
    incBy : (step) => dispatch({type:"incrementerBy", payload:step*1}),
    decBy : (step) => dispatch({type:"decrementerBy", payload:step*1})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
