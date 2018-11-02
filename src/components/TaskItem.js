import React, { Component } from 'react'
import TaskInputs from './TaskInputs'

export default class TaskItem extends Component {

    state = {
        editing: false,
        viewDescription: false
    }

    handleDoubleClick = () => {
        this.setState({ editing: true })
    }

    handleSave = (id, task) => {
        this.props.editTask(id, task)
        this.setState({ editing: false })
    }

    toggleView = () => {
        this.setState({ ...this.state, viewDescription: !this.state.viewDescription })
    }

    render() {
        const { task, deleteTask } = this.props

        let element
        if (this.state.editing) {
            element = (
                <TaskInputs 
                    assignee={task.assignee}
                    title={task.task_title}
                    deadline={task.deadline}
                    description={task.task_description}
                    editing={this.state.editing}
                    onSave={(newTask) => this.handleSave(task.task_id, newTask)} />
            )
        } else {
            element = (
                <div className="">
                    <label
                        onDoubleClick={this.handleDoubleClick}
                        onClick={this.toggleView}>
                        <p><b>assignee:</b> {task.assignee} </p>
                        <p><b>title:</b> {task.task_title} </p>
                        <p><b>deadline:</b> {task.deadline} </p>
                        {this.state.viewDescription ? <p><b>description:</b>{task.task_description}</p> : ''}
                    </label>
                    <button className="delete"
                        onClick={() => deleteTask(task.task_id)} />
                </div>
            )
        }

        return <li>{element}</li>
        
    }
}
