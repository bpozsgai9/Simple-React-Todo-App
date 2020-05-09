import React, {Component} from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component {
  
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mariokart'},
      {id: 3, content: 'go cycling'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos //todos: todos
    })
  }
  addTodo = (todo) =>{
    let l = this.state.todos.length;
    todo.id = l + 1;

    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo = { this.addTodo }/>
        <Todo todos = { this.state.todos } deleteTodo={ this.deleteTodo }/>
      </div>
    );
  }
}

export default App;
