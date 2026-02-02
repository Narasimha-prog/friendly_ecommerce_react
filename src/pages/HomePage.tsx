import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>HomePage

      <br></br>
      <Link to="/register">Go to Register Page</Link>
      <br></br>
      <Link to="/login">Go to Login Page</Link>
    </div>
  )
}

export default HomePage