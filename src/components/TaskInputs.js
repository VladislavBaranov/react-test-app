import React, { Component } from 'react'

export default class TaskInputs extends Component {

  state = {
    title: this.props.title || '',
    description: this.props.description || '',
    deadline: this.props.deadline || '',
    assignee: this.props.assignee || ''
  }

  handleSubmit () {
    this.props.onSave(this.state)
    if (this.props.newTask) {
      this.setState({
        title: '',
        description: '',
        deadline: '',
        assignee: ''
      })
    }
  }

  handleChange(type, e) {
    this.setState({
      [type]: e.target.value
    })
  }

  render() {
    return (
      <div >
        {['assignee', 'title', 'deadline'].map((item, index) => {
          return <p key={index}>
            <label htmlFor={item}>{item}</label>
            <input
              id={item}
              name={item}
              type="text"
              placeholder={this.state[item]}
              value={this.state[item]}
              onChange={this.handleChange.bind(this, item)}
            />
          </p>
        })
        }

        <label htmlFor="description">description</label>
        <textarea
          id="description"
          name="description"
          type="text"
          placeholder={this.state.description}
          value={this.state.description}
          onChange={this.handleChange.bind(this, 'description')}
        />

        <input
          type="submit"
          value={this.props.newTask ? "Create" : "Change"}
          onClick={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}
