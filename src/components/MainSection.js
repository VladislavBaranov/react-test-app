import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class MainSection extends Component {
  
  render() {
    const { tasks, actions } = this.props     
    return (
      <section className="main">
         <ul className="task-list">
          {tasks.map(task =>
            <TaskItem key={task.task_id} task={task} {...actions} />
          )}
        </ul>
      </section>
    )
  }
}
