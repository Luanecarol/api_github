import { useEffect, useState } from "react";

export function App() {
  const [ users, setUsers ]= useState([])

useEffect(() => {
  fetch('https://api.github.com/users?since=1&per_page=1000')
  .then(response => response.json())
  .then(data => setUsers(data))
},[])


  return (
<>
  {users.map(user => {
    return(
      <>
      
      <li>
      <ul>{user.id}</ul>
      <ul>{user.login}</ul>
</li>
</>
    )
  })}
</>

  );
}

export default App;
