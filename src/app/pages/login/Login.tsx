import { useNavigate } from "react-router-dom"
export const Login = () => {
  const history = useNavigate()

  const handleClick = () => {
    history('/dashboard')
  }
  
  return (
    <div>
      Login
      <button onClick={handleClick}>Dashboard</button>
    </div>
  )
}