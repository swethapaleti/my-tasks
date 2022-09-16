import './index.css'

const TaskItem = props => {
  const {item} = props
  const {task, tags} = item

  return (
    <li className="item-list">
      <p className="task-item">{task}</p>
      <p className="tag-item">{tags}</p>
    </li>
  )
}

export default TaskItem
