import { useState } from "react";

function SearchTask(props)
{
    const [userSearchInput,setUserSearchInput]=useState('');

    const handleSearchSubmit=(e)=>
    {
        e.preventDefault();
        props.searchTaskFunction(userSearchInput);
        setUserSearchInput(e.currentTarget.value);
    }

    const handleSearchChange=(e)=>
    {
        setUserSearchInput(e.currentTarget.value);
    }

    return(
        <form onSubmit={handleSearchSubmit}>
            <input type="text" value={userSearchInput} onChange={handleSearchChange} placeholder="Enter keywords to search" />
            <button>Search</button>
        </form>
    )
}

export default SearchTask