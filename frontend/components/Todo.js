import React from 'react'

const Todo = props => {
  return (
    <div>
      {props.todos.map(item=>{
        console.log(item)
        return (
          <p key={item.id}>{item.name}</p>
        )
      })}
    </div>
  )
}

export default Todo;