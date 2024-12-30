import './App.css'
import './dev201.css'
import styled from 'styled-components'

const Button3 = styled.button`
  background-color:blue;
  color:white;
  margin : 5px
`

function App() {
  return (
    <>
     <button style={{backgroundColor:"blue",color:"white"}}>Send</button>
     <button className='btn'>Send2</button>
     <Button3>Send 3</Button3>
    </>
  )
}

export default App
