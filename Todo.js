import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    const {todo: {title, completed, id}, changeStatus, deleteTodo} = this.props
    return (
      <div>
        <input 
          type='checkbox' 
          checked={completed}
          onChange={() => changeStatus(id)} />
        {title}
        <button onClick={() => deleteTodo(id)}>X</button>
      </div>
    );
  }
}
