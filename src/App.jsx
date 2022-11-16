import { Box } from './components/Box'
import './assets/css/taildwin.css'
import { Count } from './components/Count'
import { Form } from './components/Form'

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
<<<<<<< HEAD
      <Box background="brown" text={324234} /> */}
      {/* <Count /> */}
      <Form />
=======
      <Box background="brown" text={<bold>324234</bold>} /> */}
      <button onClick={() => setIsRed(!isRed)}>toggle</button>
      <Count count={10} background={isRed ? 'red': 'green'}/>
      {/* <Form /> */}
>>>>>>> e1ecd69f716f0b39adae58c5f4203f284b82ca62
    </>
  )
}

export default App
