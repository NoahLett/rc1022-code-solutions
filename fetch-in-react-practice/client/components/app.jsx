import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => this.setState({ todos: data }))
      .catch(err => console.error(err));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(data => {
        const todosCopy = [...this.state.todos];
        todosCopy.push(data);
        this.setState({ todos: todosCopy });
      })
      .catch(err => console.error(err));
  }

  toggleCompleted(todoId) {
    let toggledObject;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (todoId === this.state.todos[i].todoId) {
        toggledObject = this.state.todos[i];
      }
    }
    const toggledIndex = this.state.todos.indexOf(toggledObject);
    const toggledTodo = {
      isCompleted: !toggledObject.isCompleted
    };
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toggledTodo)
    })
      .then(res => res.json())
      .then(data => {
        const todosCopy = [...this.state.todos];
        todosCopy[toggledIndex] = data;
        this.setState({ todos: todosCopy });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
