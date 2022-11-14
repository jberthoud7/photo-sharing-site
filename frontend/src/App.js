import React, {useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {
  // const [users, setUsers] = useState([])
  // const getData = async() => {
  //   const res = await axios.get('api/users')
  //   setUsers(res.data)
  // }

  // useEffect(() => {
  //   getData()
  // }, [])
 
//console.log(users)

  return (
    <div id="startScreen">
        <div id="loginDiv">
          <Link to="/login" className="btn btn-primary">Login</Link>
        </div>
        <div id="registerDiv">
          <Link to="/register" className="btn btn-primary">Login</Link>
        </div>  
    </div>


    // <div>
    //   {users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>)}
    // </div>
  )
}

export default App