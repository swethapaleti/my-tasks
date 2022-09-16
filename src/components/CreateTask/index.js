import './index.css'

const CreateTask = props => {
  const {item, onFilterTask} = props
  const {optionId, displayText} = item

  const onTask = () => {
    onFilterTask(optionId)
  }

  return (
    <li>
      <button className="task-btn" type="button" onClick={onTask}>
        {displayText}
      </button>
    </li>
  )
}

export default CreateTask
