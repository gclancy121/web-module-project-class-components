import React from 'react'
import TodoList from './TodoList';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
          {
            name: 'Organize Garage',
            id: 1528817077286, // could look different, you could use a timestamp to generate it
            completed: false
          },
          {
            name: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          },
          {
            name: 'Play Deep Rock Galactic',
            id: 548430,
            completed: false

          }
        ]
      }
  


    }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList todos = {this.state.todos} />

      <form>
        <input />
        <button>Add</button>
        
      </form>
      <button>Clear</button>
      </div>
    )
  }
}
export default App;