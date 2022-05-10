import React from 'react'
import TodoList from './TodoList';
import TodoForm from './Form';


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

    

    addTodo = (todo) => {
      const newTodo = {
        name: todo,
        id: Date.now(),
        completed: false
      }

      this.setState({
        todos: [newTodo, ...this.state.todos]
      })
    }


    toggleCompleted = (todoId) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todoId === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo;
        })
      })
    }


  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList todos = {this.state.todos} toggleCompleted={this.toggleCompleted} />
        <TodoForm addTodo={this.addTodo}/>
      <button>Clear</button>
      </div>
    )
  }
}
export default App;