import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TaskActions from '../actions'
import './App.css';

const App = ({ tasks, actions }) => (
  <div>
    <Header addTask={actions.addTask} />
    <MainSection tasks={tasks} actions={actions} />
  </div>
)

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TaskActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
