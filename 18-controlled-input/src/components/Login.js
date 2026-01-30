import { useState } from 'react'

export const Login = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  })
  const handleFormSubmit = (event) => {
    event.preventDefault()
  }

  const handleInputChange=(text, name)=>{
    setData({ ...data, [name]: text.target.value })
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username :
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e,'username')}
          ></input>
        </label>

        <label>
          Password :
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e,'password')}
          ></input>
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  )
}
