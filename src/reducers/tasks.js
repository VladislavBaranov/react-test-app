// TODO: Add Tasks related reducers here:
// We should be able to CRUD Task entities
// Every Task should include:
// 'task_id', 'task_title', 'task_description', 'deadline' and 'assignee' (some percon's name)
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from '../constants/ActionTypes'

const initialState = [
      {
        task_id:1,
        task_title: 'Form',
        task_description: 'Create new form',
        deadline: '02/11/2018',
        assignee: 'Vlad'
      }
    ]

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          task_id: state.reduce((maxId, task) => Math.max(task.task_id, maxId), -1) + 1,
          task_title: action.task.title,
          task_description: action.task.description,
          deadline: action.task.deadline,
          assignee: action.task.assignee
        }
      ]

    case DELETE_TASK:
      return state.filter(task => task.task_id !== action.task_id)

    case EDIT_TASK:
      return state.map(task =>
        task.task_id === action.task_id ? { 
          ...task, 
          task_title: action.task.title,
          task_description: action.task.description,
          deadline: action.task.deadline,
          assignee: action.task.assignee
         } : task)

    default:
      return state
  }
};

export default tasks;
