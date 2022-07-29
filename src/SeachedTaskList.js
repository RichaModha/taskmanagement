function SearchedTaskList(props)
{
    return(
        <div>
            { 
                <ul>
                    {
                        
                        props.SearchedTaskList ?? props.SearchedTaskList.map(task=>
                            {
                                return task.task;
                            } 
                        )
                        
                    }
                </ul>
            }
        </div>
    )
}

export default SearchedTaskList