function TodoTask(props)
{
    const handleClick=(e)=>
    {
        e.preventDefault();
        props.handleToggle(e.currentTarget.id);
    }

    return(
        <div id={props.todo.id} key={props.todo.id} name="todo" value={props.todo.id} onClick={handleClick} className={props.todo.completed ? "todo strike" : "todo"}>
            {props.todo.task}
        </div>
    )
}

export default TodoTask