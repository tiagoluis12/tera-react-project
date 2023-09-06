import React, { useEffect, useState } from 'react'
import logo from "../../images/logo.svg"

export default function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState("")

  useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
    .then((response) => response.json())
    .then((data) => {
      setUsers(data)
      setIsLoading(false)
    })
  }, [])

  const handleUserChange = () => console.log("usuario selecionado")
  const handleSubmit = () => console.log("clicado")

  return isLoading ?(
    <h1>Loading...</h1>
  ) : (
    <div className="home center">
    <div className="home__logo">
      <img src={logo} className="responsive" alt="" />
    </div>
    <select onChange={handleUserChange} className="home__select-users">
      <option value="">Seleione um usuario</option>
      {users.sort((a, b) => a.fn.localeCompare(b.fn)).map((user) => (<option value={user.id} key={user.id}>{user.fn} {user.ln}</option>))}
    </select>
    <button onClick={handleSubmit} className="button-primary">Entrar</button>
  </div>
  )
}
