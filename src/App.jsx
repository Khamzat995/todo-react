import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'
import Todos from './Todos'

function App (props) {
  const [todos, setTodos] = useState(
    [
      {
        text: 'купить бананы',
        favorite: false
      },
      {
        text: 'купить машину',
        favorite: false
      },
      {
        text: 'выучить JS',
        favorite: false
      }
    ])

  const [text, setText] = useState("")

  const deleteTodo = (i) => {
    const filtered = todos.filter((todo, index)=> {
      if(index === i){
        return false
      }
      return true
    })
    setTodos(filtered)
  }

  const makeFavorite = (i) => {
    const newTodos = todos.map((item, index) => {
      if(i === index) {
        return {
          ...item,
          favorite: !item.favorite
        }
      }
      return item
    })
    setTodos(newTodos)
  }

  const addTodo = () => {
    setTodos([{
      text: text,
      favorite: false
    }, ...todos ]);
    setText("")
  }

  return (
    <div className='app'>
      <Header/>
      <Form text={text} setText={setText} addTodo={addTodo}/>
      <Todos todos={todos} makeFavorite={makeFavorite} deleteTodo={deleteTodo}/>
    </div>
  )
}
export default App