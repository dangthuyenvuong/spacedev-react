import { Box } from './components/Box'
import './assets/css/taildwin.css'
import { Count } from './components/Count'
import { Form } from './components/Form'

function App() {

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
      {/* <Count /> */}
      <Form />
    </>
  )
}

export default App
