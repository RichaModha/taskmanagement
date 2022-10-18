//import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import SearchTask from './SearchTask';
import SearchedTaskList from './SeachedTaskList';
//import Axios from "axios";
import React, {useState,useEffect} from 'react';
//import data from './data.json';

function App() {
  const [todoList_,setTodoList]=useState('');
  const [searchedTaskList_,setSearchedTaskList]=useState('');

  useEffect(()=>{
      const fetchTasks=async(req,res)=>{
      const tasksList=await fetch('http://localhost:3000/all_tasks');
      alert(tasksList);
      const jsonTasksList=await tasksList.json();

      setTodoList(jsonTasksList);
      //Axios.get('https://localhost:3000/all_tasks').then((response) => {
      //setTodoList(response.data);
    }

    fetchTasks();
  },[]);

  const handleToggle_=(id)=>
  {
    var mappedList=todoList_.map((task)=>
    {
      return task.id===Number(id) ? {...task,complete : !task.complete} : {...task}
    })

    const response = fetch('http://localhost:3000/update_task', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: this.state.post }),
          });
          const body = response.text();

          this.setState({ responseToPost: body });
  }

  const clearCompleted_=()=>
  {
    const tasksList=fetch('http://localhost:3000/all_tasks');
      alert(tasksList);
      const jsonTasksList=tasksList.json();

      setTodoList(jsonTasksList);
  }

  const searchTaskFunction_=(userSearchInput)=>
  {
    console.log(TodoForm);
    var list_=todoList_.map(task=>
    {
      return task.task.indexOf(userSearchInput)!=(-1) ? <li>{task.task}</li> : false;
    })
    console.log(list_);
    setSearchedTaskList(list_);  
  }

  return (
    <div className='App'>
      <TodoList TodoList={todoList_} handleToggle={handleToggle_} clearCompleted={clearCompleted_}/>
      <SearchTask searchTaskFunction={searchTaskFunction_}/>
      <SearchedTaskList SearchedTaskList={searchedTaskList_}/>
     
    </div>
  )
}

export default App;