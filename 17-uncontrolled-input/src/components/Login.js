export const Login = () => {
const handleFormSubmit=(event)=>{
    event.preventDefault()
    console.log()
    console.log(event.target.password.value)

    console.log({Username : event.target.username.value, Password : event.target.password.value})
}

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username :<input type="text" name="username"></input>
        </label>

        <label>
          Password :<input type="password" name="password"></input>
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  )
}
