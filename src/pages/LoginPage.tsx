import { useState, type ChangeEvent, type FormEvent } from "react";
import type { UserLoginModel } from "../api/models/userModels";
import { loginUser } from "../api/userService";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/auth/authReducer";
import type { AxiosError } from "axios";


const LoginPage = () => {
  const auth = useDispatch();

  const [formData, setFormData] = useState<UserLoginModel>({
    email: "",
    password: "",
  });

           const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(formData)
    .then((response) => auth(loginSuccess(response)))
    .catch((err) => {
      const error = err as AxiosError<string>;
      setError(error.response?.data ?? "Login failed");
    });
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      LoginPage
      <form onSubmit={handleSubmit} 
      className="max-w-md mx-auto p-4 border border-gray-300 rounded">
        <div>
          <label htmlFor="email">Email: </label>
          <input 
          type="text" 
          id="email" 
          name="email"
          onChange={handleChange}
          className="border rounded"
           value={formData.email} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="border rounded"
            value={formData.password}
          />
        </div>
        <button type="submit" className="bg-blue-500 border rounded text-white p-2  hover:bg-blue-600"> Submit Form</button>
      </form>
      <div>
       {error && (
     <div className="text-red-500 mt-2">
    {error }
     </div>
    )}
      </div>
    </div>
    
  );
};

export default LoginPage;
