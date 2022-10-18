import React , {useState} from "react";

function TodoForm(props)
{
    const [userInput,setUserInput]=useState('');

    const handleChange=(e)=>
    {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit=(e)=>
    {
        const response = fetch('http://localhost:3000/add_task', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: this.state.post }),
          });
          const body = response.text();
          
          this.setState({ responseToPost: body });

          e.preventDefault();
          setUserInput('');
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userInput} onChange={handleChange} placeholder="Enter a todo task" />
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default TodoForm