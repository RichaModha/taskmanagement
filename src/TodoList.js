import TodoTask from "./TodoTask";

function TodoList(props)
{
    return(
        <div>
            {
                props.TodoList.map(todo=>
                    {
                        return <TodoTask todo={todo} handleToggle={props.handleToggle}/>
                    })
            }

            <button onClick={props.clearCompleted}>Clear Completed Tasks</button>
        </div>
    )
}

export default TodoList;