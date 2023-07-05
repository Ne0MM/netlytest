import React, { useState } from "react"
import axios from "axios";

export default function Home() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const postUser = () => {

    axios.post('http://colabeduc.org/api/login', {
        username : username,
        password : password
      }
    )
    .then((response) => {
      console.log(response.data)
    }, (error) => {
      console.log(error)
    });

  }

  return (
    <>

      <div>

        <input 
        type="text"
        value={username}
        onChange={(event) => (setUsername(event.target.value))}
        />

        <input 
        type="password"
        value={password}
        onChange={(event) => (setPassword(event.target.value))}
        />

        <button
        onClick={postUser}
        >
          Testar
        </button>

      </div>
    
    </>
  )
}
