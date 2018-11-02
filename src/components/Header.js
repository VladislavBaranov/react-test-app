import React, { Component } from 'react'
import TaskInputs from './TaskInputs'

export default class Header extends Component {

  handleSave = task => {
         this.props.addTask(task)    
  }

  render() {
    return (
      <header className="tack-list">
        <h1>List of tasks</h1>
        <TaskInputs newTask 
          onSave={this.handleSave}
        />
      </header>
    )
  }
}
