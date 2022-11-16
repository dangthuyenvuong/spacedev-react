import { Box } from './components/Box'
import './assets/css/taildwin.css'
import { Count } from './components/Count'
import { Form } from './components/Form'
import { useEffect, useState } from 'react'
import { ToDoList } from './components/ToDoList'


const STORE_KEY = 'TO_DO_APP'
function App() {

  const [toDoList, setToDoList] = useState(() => {
    let list = localStorage.getItem(STORE_KEY)
    if(list) {
      return JSON.parse(list)
    }

    return []
  })


  useEffect(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(toDoList))
  }, [toDoList])


  const onAdd = (name) => {
    const task = {
      id: Date.now(),
      name,
      isCompleted: false
    }

    setToDoList([...toDoList, task])
  }

  const onCompleted = (id) => {
    let task = toDoList.find(e => e.id === id)
    if (task) {
      task.isCompleted = true
      setToDoList([...toDoList])
    }
  }

  // const [isRed, setIsRed] = useState(true)

  // const attri = {
  //   background: 'red',
  //   abc: 'abc',
  //   text: 'abc',
  //   c: 234234
  // }

  return (
    <>
      {/* <Box {...attri}/>
      <Box background="green" text={1 + 10 + 20}/>
      <Box background="brown" text={324234} /> */}
      {/* <button onClick={() => setIsRed(!isRed)}>Toggle background</button> */}
      {/* <Count count={10} background={isRed ? 'red': 'green'}/> */}
      {/* <Form /> */}
      <ToDoList toDoList={toDoList} onAdd={onAdd} onCompleted={onCompleted} />
    </>
  )
}

export default App
