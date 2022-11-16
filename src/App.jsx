import { Box } from './components/Box'
import './assets/css/taildwin.css'
import { Count } from './components/Count'
import { Form } from './components/Form'
import { useState } from 'react'

function App() {

  const [isRed, setIsRed] = useState(true)

  const attri = {
    background: 'red',
    abc: 'abc',
    text: 'abc',
    c: 234234
  }

  return (
    <>
      {/* <Box {...attri}/>
      <Box background="green" text={1 + 10 + 20}/>
      <Box background="brown" text={324234} /> */}
      <button onClick={() => setIsRed(!isRed)}>Toggle background</button>
      <Count count={10} background={isRed ? 'red': 'green'}/>
      {/* <Form /> */}
    </>
  )
}

export default App
