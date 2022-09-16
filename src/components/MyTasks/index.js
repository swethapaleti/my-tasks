import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CreateTask from '../CreateTask'
import TaskItem from '../TaskItem'

import './index.css'

class MyTasks extends Component {
  constructor(props) {
    super(props)
    const {tagsList} = props
    this.state = {
      task: '',
      tags: tagsList[0].optionId,
      taskList: [],
      category: '',
    }
  }

  selectTag = event => {
    this.setState({
      tags: event.target.value,
    })
  }

  taskInput = event => {
    this.setState({
      task: event.target.value,
    })
  }

  addTask = event => {
    event.preventDefault()
    const {task, tags} = this.state
    const {tagsList} = this.props
    const newTask = {
      task,
      tags,
      id: uuidv4(),
    }
    if (task !== '') {
      this.setState(prev => ({
        taskList: [...prev.taskList, newTask],
        task: '',
        tags: tagsList[0].optionId,
      }))
    }
  }

  onFilterTask = id => {
    this.setState({category: id})
  }

  render() {
    const {task, tags, taskList, category} = this.state
    const {tagsList} = this.props
    let filterList = taskList
    if (category !== '') {
      filterList = taskList.filter(each => each.tags === category)
    }

    return (
      <div className="bg">
        <form className="form" onSubmit={this.addTask}>
          <h1 className="heading">Create a task!</h1>
          <div className="input">
            <label className="label" htmlFor="task">
              Task
            </label>
            <input
              className="input-value"
              onChange={this.taskInput}
              value={task}
              id="task"
              placeholder="Enter the task here"
            />
          </div>
          <div className="input">
            <label className="label" htmlFor={tags}>
              Tags
            </label>
            <select
              className="input-value"
              onChange={this.selectTag}
              value={tags}
              id={tags}
            >
              {tagsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </div>
          <button className="btn" type="submit">
            Add Task
          </button>
        </form>
        <div className="tag-container">
          <h1 className="text">Tags</h1>
          <ul className="tags-list">
            {tagsList.map(each => (
              <CreateTask
                key={each.optionId}
                onFilterTask={this.onFilterTask}
                item={each}
              />
            ))}
          </ul>
          <h1 className="text">Tasks</h1>
          {taskList.length === 0 && (
            <p className="no-task">No Tasks Added Yet</p>
          )}
          <ul className="list-container">
            {filterList.map(each => (
              <TaskItem item={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MyTasks
