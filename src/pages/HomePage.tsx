import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>HomePage


      <Link to="/register">Go to Register Page</Link>
      <Link to="/login">Go to Login Page</Link>
    </div>
  )
}

export default HomePage