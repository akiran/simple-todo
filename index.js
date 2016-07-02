import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {title: 'Learn React', id: 1, completed: true},
        {title: 'Write react components', id: 2, completed: false}
      ]
    }
    this.addTodo = this.addTodo.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }
  addTodo(todo) {
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }
  changeStatus(id) {
    let index = this.state.todos.findIndex((todo) => todo.id === id)
    let todos = this.state.todos
    todos[index].completed = !todos[index].completed 
    this.setState({todos})
  }
  deleteTodo(id) {
    let todos = this.state.todos.filter((todo) => todo.id != id)
    this.setState({todos})
  }
  render() {
    return (
      <div className='container' style={{paddingTop: 50}}>
        <div className='row'>
          <div className='col-sm-12'>
            <TodoForm addTodo={this.addTodo}/>
            <TodoList 
              todos={this.state.todos} 
              changeStatus={this.changeStatus}
              deleteTodo={this.deleteTodo} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))