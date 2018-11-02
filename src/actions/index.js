import * as types from '../constants/ActionTypes'

export const addTask = task => ({ type: types.ADD_TASK, task })
export const deleteTask = task_id => ({ type: types.DELETE_TASK, task_id })
export const editTask = (task_id, task) => ({ type: types.EDIT_TASK, task_id, task })
