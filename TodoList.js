import React, { Component, isValidElement } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    var todoNodes = this.props.todos.map(function (todo) {
      return <Todo key={todo.id} todo={todo} changeStatus={this.props.changeStatus} deleteTodo={this.props.deleteTodo} />
    }.bind(this))
    return <div>{todoNodes}</div>
  }
}
